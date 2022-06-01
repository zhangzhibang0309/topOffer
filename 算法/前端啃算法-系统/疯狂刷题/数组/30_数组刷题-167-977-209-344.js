// 两数之和 空间常数级
function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];

    if (sum < target) left++;
    else if (sum > target) right--;
    else return [++left, ++right];
  }
}

// 977.有序数组的平方
// 是否可以原地？
let sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let res = new Array(nums.length);
  let index = nums.length - 1;

  while (left <= right) {
    let resL = nums[left] * nums[left];
    let resR = nums[right] * nums[right];

    if (resL > resR) {
      res[index--] = resL;
      left++;
    } else {
      res[index--] = resR;
      right--;
    }
  }

  return res;
};

// 209.长度最小的子数组
let minSubArrayLen = function (target, nums) {
  let slow = 0;
  let fast = 0;
  let sum = 0;
  // 这里为什么res要等于length+1？
  // 主要是为了解决当把整个数组累加起来都还不到target的情况
  // 最后累加完还不如target大的话 一定是 res ===  num.length + 1
  // 如果让res = length的话其实无法确定是累加起来还小于target还是正好数组本身累加起来≥ target
  let res = nums.length + 1;

  while (fast < nums.length) {
    sum += nums[fast++];
    while (sum >= target) {
      let curLen = fast - slow;
      if (curLen < res) res = curLen;

      sum -= nums[slow++];
    }
  }

  return res === nums.length + 1 ? 0 : res;
};

// 344.反转字符串
var reverseString = function (s) {
  let left = -1;
  let right = s.length;

  while (++left < --right) {
    [s[left], s[right]] = [s[right], s[left]];
  }
};
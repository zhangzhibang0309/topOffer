// 两数之和 空间常数级
let twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      return [left + 1, right + 1];
    }
  }
};

// 977.有序数组的平方
// 是否可以原地？
let sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let res = new Array(nums.length);
  let index = 0;

  while (left <= right) {
    let sumL = nums[left] * nums[left];
    let sumR = nums[right] * nums[right];
    if (sumL < sumR) {
      res[k] = sumL;
      left++
    } else {
      res[k] = sumR;
      right--
    }
    k++;
  }
};

// 209.长度最小的子数组
var minSubArrayLen = function (target, nums) {

  let slow = 0
  let fast = 0
  let sum = 0
  // 这里为什么res要等于length+1？
  // 主要是为了解决当把整个数组累加起来都还不到target的情况
  // 最后累加完还不如target大的话 一定是 res ===  num.length + 1
  let res = nums.length + 1

  while (fast < nums.length) {
      sum += nums[fast++]
      while (sum >= target) {
          let curLen = fast - slow
          if (curLen < res) res = curLen

          sum -= nums[slow++]
      }
  }

  return res === nums.length + 1 ? 0 : res
};

// 344.反转字符串
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
  let left = -1
  let right = s.length

  while(++left < --right) {
      [s[left],s[right]] = [s[right],s[left]]
  }
};
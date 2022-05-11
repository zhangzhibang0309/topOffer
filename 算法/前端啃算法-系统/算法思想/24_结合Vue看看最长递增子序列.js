// dp版本的最长递增子序列
var lengthOfLIS = function (nums) {
  const len = nums.length;

  const dp = new Array(nums.length).fill(1);
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++)
      if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
  }

  return Math, max(...dp);
};

// 贪心+二分
// 只能得到正确的长度，目前无法获取正确的序列
function lengthOfLIS(nums) {
  const arr = [nums[0]];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > arr[arr.length - 1]) {
      arr.push(nums[i]);
    } else {
      // 找到arr中第一个比nums[i]大的元素
      let left = 0;
      let right = arr.length - 1;
      while (left < right) {
        let mid = (left + right) >> 1;
        if (arr[mid] < nums[i]) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      arr[left] = nums[i];
    }
  }
  return arr.length;
}

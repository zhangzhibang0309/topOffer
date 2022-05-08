/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 暴力 时间复杂度O(n²) 空间复杂度O(1)
var countKDifference = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) === k) {
        count++;
      }
    }
  }

  return count;
};
// 哈希表 时间复杂度O(n) 空间复杂度O(n)
var countKDifference = function (nums, k) {
  let res = 0;
  const map = new Map();

  nums.forEach((item) => {
    map.set(item, map.get(item) === undefined ? 1 : map.get(item) + 1);
    res += map.get(item + k) ?? 0;
    res += map.get(item - k) ?? 0;
  });

  return res;
};

// map和set貌似可以归为数组一起学习

// 先做到题，力扣第一题，两数之和
// 这道题巧妙利用map，将加法运算转成简法运算，从O(n²)转成O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 时间复杂度O(n) 空间复杂度O(n)
var twoSum = function (nums, target) {
  const map = new Map();
  map.set(nums[0], 0);

  for (let i = 0; i < nums.length; i++) {
    // 这里要注意0的情况
    if (map.get(target - nums[i]) !== undefined) {
      return [map.get(target - nums[i]), i];
    }

    map.set(nums[i], i);
  }
};
console.log(twoSum([2,7,11,15],9)) // [0,1]
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function (nums) {
  let slow = 0
  let fast = 0

  while (fast < nums.length) {
      if (nums[fast]) {
          [nums[slow], nums[fast]] = [nums[fast], nums[slow]]
          slow++
      }

      fast++
  }
};
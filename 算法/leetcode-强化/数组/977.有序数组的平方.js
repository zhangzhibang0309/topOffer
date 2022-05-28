/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 977.有序数组的平方
let sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let res = new Array(nums.length);
  let index = right;

  while (left <= right) {
    let sumL = nums[left] * nums[left];
    let sumR = nums[right] * nums[right];
    if (sumL < sumR) {
      res[index] = sumR;
      right--;
    } else {
      res[index] = sumL;
      left++;
    }
    index--;
  }

  return res;
};

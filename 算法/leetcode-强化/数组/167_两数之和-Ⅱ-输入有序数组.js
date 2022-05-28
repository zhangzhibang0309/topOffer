/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
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
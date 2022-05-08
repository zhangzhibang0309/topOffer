/**
 * time 2022.02.01
 *
 * @param {number[]} nums
 * @return {number[]}
 */
// 暴力解法 先平方 再排序
// 时间复杂度 如果sort是快排的话O(n + n\log n) 空间复杂度O(n)
// 但是力扣上这个方法更快 估计是因为sort优化比较好 然后主要性能消耗在遍历上
// 而用.map遍历比下面while然后再做一些操作更快
var sortedSquares = function (nums) {
  const newArray = nums.map((item) => {
    return item ** 2;
  });
  return newArray.sort((a, b) => a - b);
};

// 时间复杂度O(n) 空间复杂度O(n)
var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  const newArray = [];
  while (left <= right) {
    let max = 0;
    if (nums[left] ** 2 > nums[right] ** 2) {
      max = nums[left++];
    } else {
      max = nums[right--];
    }
    newArray.unshift(max ** 2);
  }

  return newArray;
};

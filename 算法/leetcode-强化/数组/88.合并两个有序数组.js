/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// 双指针，时间复杂度O(n) 空间复杂度O(1)
var merge1 = function (nums1, m, nums2, n) {
  let top = m - 1;
  let bottom = n - 1;
  let index = nums1.length;

  while (index >= 0) {
    if (top < 0) nums1[index--] = nums2[bottom--];
    else if (bottom < 0) return;
    else
      nums1[index--] =
        nums1[top] > nums2[bottom] ? nums1[top--] : nums2[bottom--];
  }
};
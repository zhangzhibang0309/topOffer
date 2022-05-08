/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

// 双指针，时间复杂度O(n) 空间复杂度O(1)
var merge = function (nums1, m, nums2, n) {
  let index1 = m - 1;
  let index2 = n - 1;

  for (let i = 0; i < nums1.length; i++) {
    // 如果nums1跑完了，那就得单独处理nums2
    if (index1 < 0) nums1[nums1.length - 1 - i] = nums2[index2--];
    // 如果nums2先跑完了，那么nums1就不用管了
    else if (index2 < 0) return;
    // 都没跑完的话比较，将更大的放入nums1后面
    else
      nums1[nums1.length - 1 - i] =
        nums1[index1] > nums2[index2] ? nums1[index1--] : nums2[index2--];
  }
};

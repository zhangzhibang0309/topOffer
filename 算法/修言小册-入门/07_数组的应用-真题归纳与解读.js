// map和set貌似可以归为数组一起学习


// Map的妙用--两数求和问题

// 先做道题，力扣第一题，两数之和
// 这道题巧妙利用map，将加法运算转成简法运算，从O(n²)转成O(n)
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
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

// 强大的双指针法

// 1.合并两个有序数组 普通双指针
// 双指针，时间复杂度O(n) 空间复杂度O(1)
var merge = function (nums1, m, nums2, n) {
  let index1 = m - 1
  let index2 = n - 1

  for (let i = 0; i < nums1.length; i++) {
      // 如果nums1跑完了，那就得单独处理nums2
      if (index1 < 0) nums1[nums1.length - 1 - i] = nums2[index2--]
      // 如果nums2先跑完了，那么nums1就不用管了
      else if (index2 < 0) return
      // 都没跑完的话比较，将更大的放入nums1后面
      else nums1[nums1.length - 1 - i] = nums1[index1] > nums2[index2] ? nums1[index1--] : nums2[index2--]
  }
};

// 2.三数求和问题 -- 对撞指针
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 三树之和 双指针 处理可能重复结果
// 重点是先要有序
var threeSum = function (nums) {
  nums.sort((a, b) => {
      return a - b
  })
  console.log(nums)
  const res = []

  for (let i = 0; i < nums.length - 2; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) continue

      const current = i
      let left = i + 1
      let right = nums.length - 1
      while (left < right) {

          while (left > i + 1 && nums[left] === nums[left - 1]) left++
          while (right < nums.length - 1 && nums[right] === nums[right + 1]) right--
          if(left >= right) break

          const sum = nums[left] + nums[right]

          if (sum + nums[current] === 0) {
              res.push([nums[current], nums[left], nums[right]])
              left++
              right--
          }
          else if (sum + nums[current] < 0) left++
          else right--
      }
  }

  return res
};

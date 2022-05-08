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
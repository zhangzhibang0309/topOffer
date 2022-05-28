/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 let minSubArrayLen = function (target, nums) {

  let slow = 0
  let fast = 0
  let sum = 0
  // 这里为什么res要等于length+1？
  // 主要是为了解决当把整个数组累加起来都还不到target的情况
  // 最后累加完还不如target大的话 一定是 res ===  num.length + 1
  let res = nums.length + 1

  while (fast < nums.length) {
      sum += nums[fast++]
      while (sum >= target) {
          let curLen = fast - slow
          if (curLen < res) res = curLen

          sum -= nums[slow++]
      }
  }

  return res === nums.length + 1 ? 0 : res
};
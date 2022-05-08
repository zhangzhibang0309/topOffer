// 最长递增子序列
// 不知为何有人说这题比背包难，这简直比背包简单多了
// 一行就能解释完，就是给序列中每个节点写一个状态，dp数组就存储这个状态，没遍历到一个元素（索引为i），回头看，如果遇到前面元素小于当前元素（索引为j），那就dp[i] = max(dp[i],dp[j] + 1)，就完了。。
/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function (nums) {
    const len = nums.length

    let res = 1
    const dp = new Array(nums.length).fill(1)
    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++)
            if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1)
        res = dp[i] > res ? dp[i] : res
    }

    return res
};
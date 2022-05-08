/**
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function (cost) {
  // 1. dp[i]是从第i层楼梯跳走需要话花费的金额
  // 2. dp[i] = min(dp[i-1],dp[i-2])
  // 3. 初识化dp数组，因为可以从第0或者第1阶开始跳，所以初识化0和1就好了
  // 4. 遍历顺序，就是简单的从前到后
  // 5. 距离推到dp数组，看看自己想的是否正确
  let dp = [cost[0], cost[1]]
  let len = cost.length

  for (let i = 2; i < len; i++) {
    let next = Math.min(dp[0], dp[1]) + cost[i]
    dp[0] = dp[1]
    dp[1] = next
  }

  return Math.min(dp[0], dp[1])
};
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function (m, n) {
  // 1. dp[i][j]是到点(i,j)的路线数
  // 2. dp[i][j] = dp[i-1,j] + dp[i,j-1]
  // 3. 遍历顺序从左到右，一层层遍历
  // 4. 初识化dp[i] = 1
  // 5. 
  let dp = []
  for (let i = 0; i < m; i++) dp.push(new Array(n).fill(1))

  for (let i = 1; i < m; i++)
    for (let j = 1; j < n; j++)
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j]

  return dp[m - 1][n - 1]
};
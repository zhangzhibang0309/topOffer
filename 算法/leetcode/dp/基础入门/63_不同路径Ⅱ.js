/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function (obstacleGrid) {
  // 1. dp[i][j]是到点(i,j)的路线数
  // 2. dp[i][j] = dp[i-1,j] + dp[i,j-1]
  // 3. 遍历顺序从左到右，一层层遍历
  // 4. 初识化dp[i] = 1
  // 5. 

  const row = obstacleGrid.length
  const col = obstacleGrid[0].length
  let dp = []
  for (let i = 0; i < row; i++) {
    dp.push(new Array(col).fill(0))
  }

  for (let i = 0; i < col && obstacleGrid[0][i] === 0; ++i) {
    dp[0][i] = 1
  }
  for (let i = 0; i < row && obstacleGrid[i][0] === 0; ++i) {
    dp[i][0] = 1
  }


  for (let i = 1; i < row; i++)
    for (let j = 1; j < col; j++) {
      if (obstacleGrid[i][j] === 1) dp[i][j] = 0
      else dp[i][j] = dp[i][j - 1] + dp[i - 1][j]
    }

  return dp[row - 1][col - 1]
};
/**
 * @param {number} n
 * @return {number}
 */
 var integerBreak = function (n) {
  // 1. dp[i]是数字i拆分成两个以上数字相加，再把他们乘起来的最大值
  // 2. dp[i] = max(j*(i-j),j*dp[i-j])
  // 3. 初识化,dp[0] = 0,dp[1] = 1
  // 4. 顺序，一维数组，从左到右
  // 5. 

  let dp = [0, 1]
  for (let i = 2; i <= n; i++) {
    let temp = 0
    for (let j = 1; j <= i; j++) {
      temp = temp < Math.max(j * (i - j), j * dp[i - j]) ? Math.max(j * (i - j), j * dp[i - j]) : temp
    }
    dp[i] = temp
  }

  return dp[n]
};
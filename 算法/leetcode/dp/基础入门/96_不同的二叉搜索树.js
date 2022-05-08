/**
 * @param {number} n
 * @return {number}
 */
 var numTrees = function (n) {
  // 1. dp[i]是1-i为节点产生的二叉搜索树的数量
  // 2. 递推公式 dp[i] += dp[以j为根节点的左子树节点数量] * dp[以j为根节点的右子树节点数量]
  // 3. 初识化 dp[0]为1
  // 4. 遍历顺序 从左到右
  // 5. 
  let dp = [1, 1]

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (!dp[i]) dp[i] = 0
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }

  return dp[n]
};
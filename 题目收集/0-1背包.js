// 入参是物品的个数和背包的容量上限，以及物品的重量和价值数组
function knapsack(n, c, w, value) {
  // dp是动态规划的状态保存数组
  const dp = new Array(c + 1).fill(0);
  // res 用来记录所有组合方案中的最大值
  let res = -Infinity;
  for (let i = 1; i <= n; i++) {
    for (let v = w[i]; v <= c; v++) {
      dp[i][v] = Math.max(dp[i - 1][v], dp[i - 1][v - w[i]] + value[i]);
    }
  }
  console.log();
  return res;
}

const res = knapsack(3, 4, [2, 1, 3], [4, 2, 3]);
console.log(res);

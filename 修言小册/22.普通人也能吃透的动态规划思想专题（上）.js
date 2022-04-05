// 动态规划
// 动态规划表现在实际代码中，是一个自底向上的过程，一般就是迭代，从小一次迭代到大
// 但是我们可以基于树的思维模型来接替，站在一个比较大的数量级，也就是最后那个n，然后进行拆分，得到它与前者的关系，求出状态转移方程

// 第一题，跳楼梯，也就是斐波那契数列
// 我原称他为最简单的dp
// 我实在不知道应该解释什么了，就写一下状态转移公式dp[i] = dp[i-1] + dp[i-2]
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const f = [1];
  f[1] = 1;
  f[2] = 2;

  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 2] + f[i - 1];
  }
  return f[n];
};

// 第二题，找硬币
// 这个稍微难一点，因为他的状态转移方程比较复杂
// 我们还是从后面开始往前分析，现在已经把硬币全都找好了，比如到了n，那么这时候要拿出一个硬币，也就是说，前面一个状态都有可能是什么情况，前面所有的情况就是n-遍历硬币，也就是说有几个硬币，前一个状态就有几个情况
// 根据题意，得到f(n) = Math.min(f(n-c1)+1,f(n-c2)+1,f(n-c3)+1......f(n-cn)+1)
// 这种状态转移方程，导致其本身就是一个循环，不像之前那样直接一行就能求出来

// 因为到n的路径，有太多条，而且不是每次都去确定，是由coins.length决定的，所以就出现了那个循环
var coinChange = function (coins, amount) {
  const f = [0];

  for (let i = 1; i <= amount; i++) {
    // 状态转移方程
    f[i] = Infinity;
    for (let j = 0; j < coins.length; j++) {
      if (i - coins[j] >= 0) f[i] = Math.min(f[i], f[i - coins[j]] + 1);
    }
  }

  if (f[amount] === Infinity) return -1;
  return f[amount];
};

/**
 * Time 2022.04.03
 *
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 这个稍微难一点，因为他的状态转移方程比较复杂
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

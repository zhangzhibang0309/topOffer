/**
 * Time 2022.04.03
 *
 * 爬楼梯 经典dp
 * @param {number} n
 * @return {number}
 */

// 递归
var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  return climbStairs(n - 1) + climbStairs(n - 2);
};

// 记忆化搜索
const f = [];
var climbStairs = function (n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  if (f[n] === undefined) fn = climbStairs(n - 1) + climbStairs(n - 2);
  return f[n];
};

// dp
var climbStairs = function (n) {
  const f = [1];
  f[1] = 1;
  f[2] = 2;

  for (let i = 3; i <= n; i++) {
    f[i] = f[i - 2] + f[i - 1];
  }
  return f[n];
};

/**
 * time 2022.01.18
 *
 * @param {number} n
 * @return {number}
 */
// 递归 效率极差
let fib2 = function(n) {
  if (n === 0) {
      return 0
  }
  if (n === 1) {
      return 1
  }
  return fib2(n - 1) + fib2()
};
// dp
let fibDp = (n) => {
  let dp = [0, 1];
  
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n]
};
// 减少内存消耗 不虚要开辟n长度的数组 在不知道dp之前自己写的
let fib = function (n) {
  if (n == 0) return 0;

  if (n == 1) return 1;

  let pre = 1;
  let ppre = 0;
  let res = 0;
  for (let i = 2; i <= n; i++) {
    res = (pre + ppre) % 1000000007;
    ppre = pre;
    pre = res;
  }
  return res;
};
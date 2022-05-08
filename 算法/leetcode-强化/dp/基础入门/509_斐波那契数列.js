/**
 * time 2022.01.18
 *
 * @param {number} n
 * @return {number}
 */
// 递归 时间复杂度O(2^n) 
let fib2 = function(n) {
  if (n === 0) {
      return 0
  }
  if (n === 1) {
      return 1
  }
  return fib2(n - 1) + fib2()
};
// 普通dp 时间复杂度O(n) 空间复杂度O(n)
let fibDp = (n) => {
  let dp = [0, 1];
  
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n]
};
// dp 压缩数组 时间复杂度O(n) 空间复杂度O(1)
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
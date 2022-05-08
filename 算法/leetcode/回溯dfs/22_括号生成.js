/**
 * @param {number} n
 * @return {string[]}
 */
// 裸深搜
var generateParenthesis = function (n) {
  let res = [];

  function dfs(left, right, s) {
    if (left === 0 && right === 0) res.push(s);

    if (left > 0) dfs(left - 1, right, s + "(");
    if (right > left) dfs(left, right - 1, s + ")");
  }

  dfs(n, n, "");

  return res;
};

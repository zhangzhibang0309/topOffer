/**
 * time 2022.02.18
 *
 * @param {string} s
 * @return {boolean}
 */

// 用栈 时间复杂度O(n) 空间复杂度O(1)
// 然后用一个对象维护一下数据
var isValid = function (s) {
  const leftToRight = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === "(" || ch === "{" || ch === "[") {
      stack.push(leftToRight[ch]);
    } else {
      if (!stack.length || stack.pop() !== s[i]) return false;
    }
  }

  return !stack.length;
};

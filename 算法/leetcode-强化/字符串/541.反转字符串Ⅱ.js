/**
 * time 2022.01.14
 * 
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
// if else方案
var reverseStr1 = function (s, k) {
  var newArr = s.split("");
  for (var i = 0; i < newArr.length; i += 2 * k) {
    if (newArr.length - i >= k) {
      var l = i - 1,
        r = i + k;
      while (++l < --r) {
        [newArr[l], newArr[r]] = [newArr[r], newArr[l]];
      }
    } else
      var l = i - 1,
        r = newArr.length;
    while (++l < --r) {
      [newArr[l], newArr[r]] = [newArr[r], newArr[l]];
    }
  }
  return newArr.join("");
};
// 三目运算符优化
var reverseStr2 = function (s, k) {
  var newArr = s.split("");
  for (var i = 0; i < newArr.length; i += 2 * k) {
    (l = i - 1), (r = newArr.length - i >= k ? i + k : newArr.length);
    while (++l < --r) [newArr[l], newArr[r]] = [newArr[r], newArr[l]];
  }
  return newArr.join("");
};

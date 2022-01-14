/**
 * time 2022.01.13
 * 
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// api
var reverseString1 = function (s) {
  return s.reverse();
};
// 自己写的 繁杂的双指针
var reverseString2 = function (s) {
  for (var i = 0; i < s.length / 2; ++i) {
    var temp;
    temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }
};
// 解法3
var reverseString3 = function (s) {
  var l = -1,
    r = s.length;
  while (++l < --r) [s[l], s[r]] = [s[r], s[l]];
};
// 测试
var string = ["1", "2", "3", "4", "5"];
reverseString3(string);
console.log(string);

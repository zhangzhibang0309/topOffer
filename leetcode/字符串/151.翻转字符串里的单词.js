/**
 * time 2022.01.14
 * 
 * @param {string} s
 * @return {string}
 */
// 需要辅助空间
var reverseWords = function (s) {
  var strArr = s.split(" ");
  var length = strArr.length;
  for (var i = 0; i < length; i++) {
    if (strArr[i] === "") {
      strArr.splice(i--, 1);
    }
  }
  length = strArr.length;
  var left = 0;
  var right = length - 1;

  for (var i = 0; i < length / 2; i++) {
    [strArr[i], strArr[right - i]] = [strArr[right - i], strArr[i]];
  }

  return strArr.join(" ");
};


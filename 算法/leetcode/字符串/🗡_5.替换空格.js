/**
 * time 2022.01.14
 * 
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  var strArr = Array.from(s);
  var length = strArr.length;
  var count = 0;

  for (var i = 0; i < length; i++) {
    if (strArr[i] === " ") count++;
  }
  var left = strArr.length - 1;
  var right = strArr.length + count * 2 - 1;

  var resCount = 0;
  while (resCount < count) {
    if (strArr[left] === " ") {
      resCount++;
      left--
      strArr[right--] = "0";
      strArr[right--] = "2";
      strArr[right--] = "%";
    } else {
      strArr[right--] = strArr[left--];
    }
  }

  return strArr.join("");
};

var s = "We are happy.";
console.log(replaceSpace(s));

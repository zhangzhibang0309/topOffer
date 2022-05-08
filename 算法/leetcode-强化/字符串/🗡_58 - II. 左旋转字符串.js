/**
 * time 2022.01.14
 * 
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
// 转数组 然后处理数组
var reverseLeftWords = function (s, n) {
  var strArr = s.split("")
  var slowIndex = 0;
  var fastIndex = strArr.length;

  while (slowIndex < n) {
    strArr[fastIndex++] = strArr[slowIndex++]
  }
  console.log(strArr)
  removeFront(strArr, n)
  return strArr.join("")
};
function removeFront(strArr, n) {
  var slowIndex = 0;
  var fastIndex = n;
  while (fastIndex < strArr.length) strArr[slowIndex++] = strArr[fastIndex++]

  strArr.length -= n;
}

// 不转数组 直接操作字符串
var reverseLeftWords = function(s, n) {
  const length = s.length;
  let i = 0;
  while (i < length - n) {
    s = s[length - 1] + s;
    i++;
  }
  return s.slice(0, length);
};

// 字符串和数组都能通过s[index]取到，那么区别是什么呢？
// 字符串没法直接修改 而数组随意修改
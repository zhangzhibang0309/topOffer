// 二分

// leftpad是什么
let s = "hello";
s.padStart(10, "0");
console.log(s.padStart(10, "0"));
// 实现 很烂
function myLeftPad(str, length, ch) {
  let len = length - str.length + 1;
  return Array(len).join(ch) + str;
}
console.log(myLeftPad("hello", 10, "0"));
// js的实现
function jsLeftPad(str, length, ch) {
  let len = length - str.length;

  let total = "";
  while (true) {
    // if (len % 2 === 1) {
    if (len & 1) {
      total += ch;
    }
    if (len === 1) {
      return total + str;
    }
    ch += ch;
    len = len >> 1;
  }
}
console.log(jsLeftPad("hello", 15, "0"));
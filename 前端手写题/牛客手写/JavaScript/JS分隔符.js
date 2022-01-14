function _comma(number) {
  // 补全代码
  var arr = [];
  while (number > 1) {
    arr.push(number % 1000);
    number /= 1000;
  }
  console.log(arr);
}
_comma(10000);

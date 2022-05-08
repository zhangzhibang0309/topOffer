/**
 * Time 2022.03.06
 * 
 * @param {string} s
 * @return {number}
 */
// 对正则表达式的应用 捕获组 很好用
var myAtoi = function (s) {
  const reg = /\s*([-\+]?[0-9]*).*/;
  const group = s.match(reg);

  const max = Math.pow(2, 31) - 1;
  const min = -max - 1;

  let res = 0;

  if (group) {
    // 将捕获组转成数字
    res = +group[1];

    // 当然 也有可能存在只有+或者-的情况
    if (isNaN(res)) res = 0;
  }

  res = res > max ? max : res;
  res = res < min ? min : res;

  return res;
};

/**
 * time 2022.02.10
 *
 * @param {number} n
 * @return {string[]}
 */
var simplifiedFractions = function (n) {
  const arr = [];
  // 循环所有分母
  for (let i = 2; i <= n; i++) {
    // 循环所有分子
    for (let j = 1; j < i; j++) {
      if (j === 1 || (j !== 1 && i % j !== 0)) {
        if (func(j, i)) {
          const temp = j + "/" + i;
          arr.push(temp);
        }
      }
    }
  }

  return arr;
};

function func(min, max) {
  for (let i = 2; i < min; i++) {
    if (min % i === 0 && max % i === 0) return false;
  }

  return true;
}

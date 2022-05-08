/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */

// 时间复杂度不太固定 总之不太到n，肯定比n²要好 空间O(n)
 var shortestToChar = function (s, c) {
  let res = new Array(s.length).fill(s.length)
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      res[i] = 0
      let tmp = i
      let left = i - 1
      let right = i + 1
      while (left >= 0 && s[left] !== c) {
        if (tmp - left < res[left]) res[left] = tmp - left
        left--
      }
      while(right < s.length && s[right] !== c) {
        if (right - tmp < res[right]) res[right] = right - tmp
        right++
      }
    }
  }
  return res
};
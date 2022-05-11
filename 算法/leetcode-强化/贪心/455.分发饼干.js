/**
 * Time 05.11
 * 
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
 var findContentChildren = function (g, s) {
  g.sort((a, b) => b - a)
  s.sort((a, b) => b - a)

  // 饼干满足胃口尽可能大的
  let ret = 0
  let index = 0// 饼干索引
  for(let i = 0; i < g.length;i++) {
      if(index < s.length && s[index] >= g[i]) {
          ret++
          index++
      }
  }
  
  return ret
};
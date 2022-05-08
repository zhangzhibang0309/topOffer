/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// 时间复杂度大概是n*m，空间复杂度比较高，级别跟时间差不多
// 是用编码，找到同组单词的唯一值，作为key
 var groupAnagrams = function (strs) {
  const map = new Map()

  for (let i = 0; i < strs.length; i++) {

    let charTabel = new Array(26).fill(0)
    for (let j = 0; j < strs[i].length; j++) {
      let delta = strs[i].charCodeAt(j) - 'a'.charCodeAt()
      charTabel[delta]++
    }
    const ret = String(charTabel)
    let temp = map.get(ret)
    map.set(ret, (Array.isArray(temp) ? [...temp, i] : [i]))
  }
  console.log(map)
  let res = []
  map.forEach(item => {
    for (let i = 0; i < item.length; i++) {
      item[i] = strs[item[i]]
    }
    res.push(item)
  })

  return res
};
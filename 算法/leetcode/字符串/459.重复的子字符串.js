/**
 * @param {string} s
 * @return {boolean}
 */
// 还是利用KMP算法 主要是找next数组的规律
 var repeatedSubstringPattern = function (s) {
    let next = getNext(s)
    if (next[s.length - 1] !== 0 && s.length % (s.length - next[s.length - 1]) === 0) return true
    return false
  };
  
  function getNext(needle) {
    let next = [];
    let j = 0;
    next.push(j);
  
    for (let i = 1; i < needle.length; ++i) {
      while (j > 0 && needle[i] !== needle[j])
        j = next[j - 1];
      if (needle[i] === needle[j])
        j++;
      next.push(j)
    }
    return next;
  }
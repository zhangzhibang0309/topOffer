/**
 * time 2022.01,16
 * 
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// KMP算法
 var strStr = function (haystack, needle) {
    if (needle.length === 0) return 0
    let j = 0;
    let next = getNext(needle)
    for (let i = 0; i < haystack.length; ++i) {
  
      while (j > 0 && needle[j] !== haystack[i]) j = next[j - 1];
  
      if (needle[j] === haystack[i]) j++;
      console.log(j === needle.length)
      if (j === needle.length) return (i - needle.length + 1);
    }
    return -1
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
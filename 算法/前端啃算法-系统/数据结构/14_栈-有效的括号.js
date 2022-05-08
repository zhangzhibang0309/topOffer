var isValid = function (s) {
  const stack = []
  const obj = {
    '(': ')',
    '[': ']',
    '{': '}'
  }

  for (let i = 0; i < s.length; i++) {
    const ele = s[i]
    if (ele in obj) stack.push(ele)
    else if(ele !== obj[stack.pop()]) return false
  }

  return !stack.length
};
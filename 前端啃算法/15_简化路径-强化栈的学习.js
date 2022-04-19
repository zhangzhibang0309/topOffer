// 就是 很简单的一道题 栈的应用
 var simplifyPath = function (path) {
  const stack = []
  const pathArr = path.split("/")

  pathArr.forEach(item => {
    if (item === "..") stack.pop()
    else if (item && item !== ".") stack.push(item)
  })

  return "/" + stack.join("/")

};
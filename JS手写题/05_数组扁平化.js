// 递归
// function recursiveFlatter(arr) {
//   if (!arr.length) return;

//   return arr.reduce((pre, cur) => {
//     return Array.isArray(cur) ? [...pre, ...recursiveFlatter(cur)] : [...pre, cur];
//   }, []); // 这里为什么要加一个initialValue等于[]呢？因为要保证所有的pre都是可迭代对象，如果不加[]参数，那么当某一次递归的时候，出现只有一层，那么第一个元素就不可迭代了。
// }
// console.log(
//   recursiveFlatter([[[1, 1, 1, 1, 1], 1], 2, [1, [2, 3, [4, 5, [6]]]]])
// );

// 迭代
function flatter(arr) {
  // 判断空数组
  if (!arr.length) return;
  // 遍历每个数组的的元素，如果检测到某个元素是数组，那就拆一层，直到拍平
  while (arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr); 
  }
  // 返回拍平的数组
  return arr;
}
const arr = [1, 2, [1, [2, 3, [4, 5, [6]]]]]
const res = flatter(arr)
console.log(res)

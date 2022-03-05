/**
 * 数组在JavaScript十分重要
 */

// 一维数组

// 数组的创建
// const arr = []

//
// const arr = new Array()

// new方式创建数组传入数量
// const arr = new Array(7)

// new方式创建数组并填充
// const arr = new Array(7).fill(0)
// console.log(arr)

// 遍历
// const arr = [1, 2, 3, 4, 5];
// 一维遍历1 -- for
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// 一维遍历2 -- forEach
// arr.forEach((item, index) => {
//   console.log(index, item);
// });
// 一维数组3 -- map
// const newArray = arr.map((item, index) => {
//   console.log(index, item);

//   return item + 1;
// });
// console.log(newArray)

// 二维数组

// 字面量创建二维数组
// const arr = [
//     [1,1,1],
//     [1,1,1],
//     [1,1,1]
// ]
// console.log(arr)

// new方式创建二维数组使用fill遇到问题
// fili传入的数组是引用，所以最外面数组存放的子数组其实是一个引用
// const arr = new Array(7).fill([])
// console.log(arr)
// arr[0][0] = 0
// arr[0][1] = 1
// console.log(arr)

// 优雅的二维数组初始化方式
// const arr = new Array(7);
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = []
// }
// console.log(arr)

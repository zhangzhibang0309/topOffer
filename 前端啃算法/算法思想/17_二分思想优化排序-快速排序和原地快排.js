const { strictEqual } = require("assert");

let arr = [1, 34, 2323, 3, 0, 3434];

// 普通快排
// function quickSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }

//   let flag = arr[0];
//   let left = [];
//   let right = [];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > flag) {
//       right.push(arr[i]);
//     } else {
//       left.push(arr[i]);
//     }
//   }

//   return quickSort(left).concat(flag, quickSort(right));
// }

// 原地快排
function quick1(arr, start, end) {
  // 双指针
  let init = start;
  let flag = arr[init];
  start++;
  while (start <= end) {
    while (arr[end] > flag) {
      end--;
    }
    while (arr[start] < flag) {
      start++;
    }
    if (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  [arr[init], arr[start - 1]] = [arr[start - 1], arr[init]];
  return start
}
function quickSort1(arr, start, end) {
  if (start < end) {
    let index = quick1(arr, start, end); // 标志位的值

    quickSort1(arr, start, index - 1);
    quickSort1(arr, index, end);
  }

}

quickSort1(arr, 0, arr.length - 1)
console.log(arr)

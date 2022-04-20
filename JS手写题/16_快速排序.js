let arr = [-1, 2, -8, -10];

// 普通快排
// function quickSort1(arr) {
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

//   return [...quickSort1(left), flag, ...quickSort1(right)];
// }
// console.log(quickSort1(arr));

// 原地快排
// 快排入口
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (right <= left) return;
  let lineIndex = partition(arr, left, right);
  quickSort(arr, left, lineIndex - 1);
  quickSort(arr, lineIndex + 1, right);
  return arr;
}
// 每一次分区
function partition(arr, left, right) {
  const v = arr[left];
  let i = left,
    j = right + 1;
  while (true) {
    while (arr[++i] < v) if (i >= right) break;
    while (arr[--j] > v) if (j <= left) break;
    if (i >= j) break;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  // 四种情况break出来，j都是左子数组的最后一个元素，然后交换
  [arr[left], arr[j]] = [arr[j], arr[left]];
  return j;
}
quickSort(arr);
console.log(arr);

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
  if (arr.length > 1) {
    // lineIndex表示下一次划分左右子数组的索引位
    const lineIndex = partition(arr, left, right);
    // 如果左边子数组的长度不小于1，则递归快排这个子数组
    if (left < lineIndex - 1) {
      quickSort(arr, left, lineIndex - 1);
    }
    // 如果右边子数组的长度不小于1，则递归快排这个子数组
    if (lineIndex < right) {
      quickSort(arr, lineIndex, right);
    }
  }
  return arr;
}
// 以基准值为轴心，划分左右子数组的过程
function partition(arr, left, right) {
  let pivotValue = arr[Math.floor(left + (right - left) / 2)];
  let i = left;
  let j = right;
  while (i <=  j) {
    while (arr[i] < pivotValue) {
      i++;
    }
    while (arr[j] > pivotValue) {
      j--;
    }
    if (i <= j) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
      j--;
    }
  }
  return i;
}
quickSort(arr)
console.log(arr)
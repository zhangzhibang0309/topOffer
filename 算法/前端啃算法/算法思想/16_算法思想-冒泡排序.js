let arr = [1, 34, 222, 0, 2, 323];
// 时间复杂度O(n^2)
function bubbleSort(arr) {
  let len = arr.length - 1;
  for (let j = 0; j < len; j++) {
    for (let i = 0; i < len - j; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }
}

bubbleSort(arr);
console.log(arr);

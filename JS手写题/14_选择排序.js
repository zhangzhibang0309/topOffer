// 选择排序 依次找到最小的，放到尽可能放的方向
let arr = [3, 6, 2, 4, 1];
let len = arr.length;

let minIdx;

for (let i = 0; i < len; i++) {
  minIdx = i;
  for (let j = i; j < len; j++) {
    if (arr[j] < arr[minIdx]) minIdx = j;
  }
  [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
}

console.log(arr)

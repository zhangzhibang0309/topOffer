// 选择排序 依次找到最小的，放到尽可能放的方向
let arr = [3, 6, 2, 4, 1];
let len = arr.length;

for (let i = 0; i < len; i++) {
  let minIdx = i;
  for (let j = i + 1; j < len; j++) {
    if(arr[j] < arr[minIdx]) minIdx = j
  }
  [arr[i],arr[minIdx]] = [arr[minIdx],arr[i]]
}

console.log(arr);

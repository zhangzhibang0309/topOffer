// 插入排序，不断遍历，将每个元素按照有序往前插
let arr = [3, 6, 2, 4, 1];
let len = arr.length;

for (let i = 0; i < len; i++) {
  let temp = arr[i];
  let j = i;
  while (j > 0 && arr[j - 1] > arr[j]) {
    [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    j--;
  }
  arr[j] = temp
}

console.log(arr)

// 冒泡排序 一轮轮冒泡
const arr = [3, 6, 2, 4, 1];
const len = arr.length;

for (let i = 0; i < len - 1; i++) {
  for (let j = 0; j < len - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}

console.log(arr);

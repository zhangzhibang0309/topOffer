// es6
// function uniqueArr(arr) {
//   return [...new Set(arr)];
// }
// const newArr = uniqueArr([1,1,2,2,3,45,6,4,2,11])
// console.log(newArr)

// filter和indexOf
// function uniqueArr(arr) {
//   const res = arr.filter((item, index, array) => {
//     return array.indexOf(item) === index;
//   });

//   return res;
// }
// const arr = [1, 1, 2, 2, 3, 45, 6, 4, 2, 11];
// console.log(uniqueArr(arr));

// 空间复杂度O(1)
function uniqueArr(arr) {
  let slow = 0;
  let fast = 0;
  arr.sort((a, b) => {
    return a - b;
  });

  while (fast < arr.length) {
    fast++;
    if (arr[fast] > arr[slow]) {
      slow++;
      [arr[fast], arr[slow]] = [arr[slow], arr[fast]];
    }
  }
  arr.length = slow + 1;
}
const arr = [1, 1, 2, 2, 3, 45, 6, 4, 2, 11];
uniqueArr(arr);
console.log(arr);

// es6
function uniqueArr(arr) {
  return [...new Set(arr)];
}
const newArr = uniqueArr([1,1,2,2,3,45,6,4,2,11])
console.log(newArr)

// 不用es6
function uniqueArr(arr) {
  var slow = 0;
  var fast = 0;

  while (fast < arr.length) {
    fast++;
    if (arr[fast] > arr[slow]) {
      slow++;
      [arr[slow], arr[fast]] = [arr[fast], arr[slow]];
    }
  }
}
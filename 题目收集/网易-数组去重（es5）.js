const arr = [
  1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 5, 5, 6, 6, 6, 10, 111, 111, 111, 200,
];

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
uniqueArr(arr);
console.log(arr);

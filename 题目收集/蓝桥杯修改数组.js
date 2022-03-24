arr = [2, 1, 1, 1, 1, 3, 4];

function foo(arr) {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (!map.get(arr[i])) {
      map.set(arr[i], 1);
    } else {
      while (map.get(arr[i])) {
        arr[i] += 1;
      }
      map.set(arr[i], 1);
    }
  }
}

foo(arr);
console.log(arr);

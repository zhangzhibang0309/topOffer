// 边长为2
const n = 4;
// 一共切3刀
const m = 3;

let cutDirection = {
  x: 1,
  y: 2,
  z: 2,
};

let map = new Map();
map.set("x", 0);
map.set("y", 0);
map.set("z", 0);

console.log(map);

for (let i in cutDirection) {
  if (cutDirection[i] > n / 2) {
    cutDirection[i] = n - cutDirection;
  }

  if (map.get(i) ?? false) {
    map.set(i, cutDirection[i]);
  } else {
    map.set(i, map.get(i) < cutDirection[i] ? cutDirection[i] : map.get(i));
  }
}

let res = 1
map.forEach((value,key) => {
    res = (n-value) * res
})

console.log(res)
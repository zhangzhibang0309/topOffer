const arr = ["0.1.1", "2.3.3", "0.302.1", "4.2", "4.3.5", "4.3.4.5"];

arr.sort((a, b) => {
  let i = 0;
  const arr1 = a.split(".");
  const arr2 = b.split(".");

  while (true) {
    const s1 = arr1[i];
    const s2 = arr2[i];
    i++;

    // 长度问题
    if (s1.length === undefined || s2 === undefined)
      return s2.length - s1.length;

    // 数值一样
    if (s1 === s2) continue;

    return s2 - s1;
  }
});
console.log(arr)

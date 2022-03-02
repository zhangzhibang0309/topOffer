let m = (n = 3);

while (m >= 0) {
  let count = m - 1;
  let mm;
  let nn;
  while (count--) {
    mm = mm * (mm - (count + 1));
  }
  console.log(mm);

  m = m - 3;
  n = n - 2;
}

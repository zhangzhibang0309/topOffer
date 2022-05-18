// 核心就是将小数转成整数计算在转成小数
// 但是直接通过*10放大也是会丢失精度的，所以直接转成字符串扣掉小数点
let n = parseInt(String(282.3056).split(".").join(""));
let m = parseInt(String(44.35).split(".").join(""));
console.log(n,m)

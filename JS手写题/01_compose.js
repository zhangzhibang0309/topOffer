// 用法如下:
function fn1(x) {
  return x + 1;
}
function fn2(x) {
  return x + 2;
}
function fn3(x) {
  return x + 3;
}
function fn4(x) {
  return x + 4;
}
const a = compose(fn1, fn2, fn3, fn4);
console.log(a(1)); // 1+4+3+2+1=11

function compose(...fn) {
  // 这个...是将函数调用时传入的多个参数转成数组
  // 如果没有传入fn
  if (!fn.length) return (v) => v;
  // 如果只传入了一个
  if (fn.length === 1) return fn[0];
  // 两个及以上
  return fn.reduce(
    (pre, cur) =>
      (...args) =>
        pre(cur(...args))
  );
}

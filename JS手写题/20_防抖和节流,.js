// mark

// 防抖
function debounce(fn, delay = 300) {
  //默认300毫秒
  let timer;
  return function () {
    const args = arguments;
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.call(this,args); // 改变this指向为调用debounce所指的对象
    }, delay);
  };
}

let obj = {
    debounce
}
window.addEventListener(
  "scroll",
  obj.debounce(function() { 
    console.log(111,this);
  }, 1000)
);

// // 节流
// // 设置一个标志
// function throttle(fn, delay) {
//   let flag = true;
//   return () => {
//     if (!flag) return;
//     flag = false;
//     timer = setTimeout(() => {
//       fn();
//       flag = true;
//     }, delay);
//   };
// }

// window.addEventListener(
//   "scroll",
//   throttle(() => {
//     console.log(111);
//   }, 1000)
// );

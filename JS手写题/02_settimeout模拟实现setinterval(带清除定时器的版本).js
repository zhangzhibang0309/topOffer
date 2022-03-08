function Zsettimeout(fn, t) {
  // 定义timer
  let timer = null;

  // 编写递归调用函数
  function interval() {
    fn();
    timer = setTimeout(interval, t);
  }

  // 调用
  interval();

  // 将清除定时器函数return出去
  return {
    cancel() {
      clearTimeout(timer);
    },
  };
}

let a = Zsettimeout(() => {
  console.log(11);
}, 1000);
a.cancel();

// 
/**
 * 既然有setinterval我们为什么还要用settimeout去实现一遍？
 * 
 * 首先明确定时器不是间隔一段时间去执行任务，而是每过time时间将传入的函数push到消息队列。
 * setinterval是宏任务，会在push之前判断队列里面是否有任务，有的话就会忽略当前的间隔。
 * settimeout也是宏任务，但在push之前不会判断队列是否有任务，所以不会存在忽略间隔的问题。
 */




// 拓展 用settimeout实现setinterval
function Zsetinterval(fn, t) {
  const timer = setInterval(() => {
    clearInterval(timer);
    fn();
  }, t);
}
Zsetinterval(() => {
  console.log(111);
}, 1000);

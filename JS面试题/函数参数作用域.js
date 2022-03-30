// 这道题目是问输出什么，但其核心是作用域问题
// 这里本身就是function有个作用域，外部有个作用域，但是这个函数参数有默认值时，就会形成一个参数作用域
var x = 0;

function foo(
  x,
  y = function () {
    x = 3;
    console.log(x);// 3 当前作用域，也就是y前面的x，被赋值为3
  }
) {
  console.log(x);// undefined -- 自己的作用域没有x，往上找到参数x
  var x = 2;
  y();
  console.log(x);// 2 这个就是上面的x = 2
}

foo();
console.log(x);// 0 这个是正常的，就是最上面的x

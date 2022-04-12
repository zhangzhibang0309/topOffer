function myCurried(fn) {
  function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      function curried2(...args) {
        return curried.apply(this, [...args, ...args2]);
      }

      return curried2;
    }
  }

  return curried;
}

function myCurried(fn) {
  function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      function curried2(...args2) {
        return curried.apply(this, [...args, ...args2]);
      }
      return curried2;
    }
  }

  return curried;
}

function sum(a, b, c) {
  return a + b + c;
}
const res = myCurried(sum);
console.log(res(1)(2)(3));

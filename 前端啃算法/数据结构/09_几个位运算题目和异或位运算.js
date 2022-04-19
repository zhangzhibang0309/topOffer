// 判断n是否为2的幂
 var isPowerOfTwo = function (n) {
  return n > 0 && (n & (n - 1)) === 0
}

// 判断只出现一次的数字,其他数字都出现两次
// 把所有的数字全部异或起来,最后就是0^target=target
 var singleNumber = function (nums) {
  let ret = 0
  nums.forEach(num => {
    ret = ret ^ num
  })

  return ret
};
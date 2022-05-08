/**
 * @param {number} n
 * @return {number}
 */
// 求一个数的阶乘后面的零
// 0也就是10，10由2 * 5组成。一个数的因子5的数量一定大于2
// 所以统计一下整个阶乘式里面5的数量就可以了，每次+5递增
 var trailingZeroes = function (n) {
    let cnt = 0
    for (let i = 5, temp; i <= n; i += 5) {
        temp = i
        while (temp % 5 === 0) {
            temp /= 5
            cnt++
        }
    }
    return cnt
};
/**
 * time 2022.02.09
 * 
 * @param {number} x
 * @return {boolean}
 */
// 时间复杂度O(logn) 空间复杂度O(1)
 var isPalindrome = function (x) {
    if(x < 0 || x % 10 === 0 && x !== 0) return false

    let half = 0
    while (x > half) {
        half = half * 10 + x % 10
        x = parseInt(x / 10)
    }

    return (x === half) || (x === parseInt(half / 10))
};
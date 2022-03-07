/**
 * Time 2022.03.06
 * 
 * @param {string} s
 * @return {boolean}
 */

// 利用双指针和回文字符串的对称性
// 指针对撞
// 时间复杂度：O(n) 空间复杂度O(1)
 var validPalindrome = function (s) {
    let left = 0
    let right = s.length - 1

    if (isPalindrome(s, left, right)) return true


    while (left < right) {
        if (s[left] !== s[right]) {
            if (isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)) return true

            return false
        } else {
            left++
            right--
        }
    }

    return false
};

function isPalindrome(s, left, right) {
    while (left < right) {
        if (s[left] !== s[right]) {
            return false
        }

        left++
        right--
    }

    return true
}
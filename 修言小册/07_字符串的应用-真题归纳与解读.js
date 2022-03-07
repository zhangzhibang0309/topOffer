/**
 * 字符串
 */

// 先来几个基本技能

// 1.反转字符串
const str = "abc";
// 转数组 反转 拼接
const res = str.split("").reverse().join("");

// 2.判断是否是回文字符串
// 两种方法：
// 反转
// function isPalindrome(str) {
//   const reverseStr = str.split("").reverse().join("");

//   return reverseStr === str;
// }
// // 遍历前半部分 对比后半部分
// function isPalindrome(str) {
//   for (let i = 0; i < str.length / 2; i++) {
//     if (str[i] !== str[str.length - 1 - i]) {
//       return false;
//     }
//   }
// }

// 高频真题
// 回文字符串的衍生问题
var validPalindrome = function (s) {
  let left = 0;
  let right = s.length - 1;

  if (isPalindrome(s, left, right)) return true;

  while (left < right) {
    if (s[left] !== s[right]) {
      if (isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1))
        return true;

      return false;
    } else {
      left++;
      right--;
    }
  }

  return false;
};

function isPalindrome(s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

// 字符串匹配问题 -- 正则表达式初相见
var WordDictionary = function () {
  this.words = new Map();
};

/**
 * @param {string} word
 * @return {void}
 */
// 添加单词，这里只对应字符串，不需要考虑正则
// 几个思路点：
//  1.存放字符串 采用map 但是用字符串长度最为key 这样做在查找的时候 对普通字符串 其实是更损耗性能的 因为搞到数组里面还得用includes去查找 直接用map肯定是更快的
//  但是对于正则表达式的匹配 如果不先匹配长度的话 就要遍历整个map去匹配 将长度搞成key无疑效率是更高的

//  2.对于这种出现.啥的 字符串匹配 要去考虑正则表达式
WordDictionary.prototype.addWord = function (word) {
  if (this.words.get(word.length)) this.words.get(word.length).push(word);
  else this.words.set(word.length, [word]);
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  // 长度都匹配不上
  if (!this.words.get(word.length)) return false;

  // 如果是字符串
  if (!word.includes(".")) {
    return this.words.get(word.length).includes(word);
  }

  // 如果是正则表达式
  const reg = new RegExp(word);
  return this.words.get(word.length).some((item) => {
    return reg.test(item);
  });
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

//  正则表达式更进一步——字符串与数字之间的转换问题
/**
 * Time 2022.03.06
 *
 * @param {string} s
 * @return {number}
 */
// 对正则表达式的应用 捕获组 很好用
var myAtoi = function (s) {
  const reg = /\s*([-\+]?[0-9]*).*/;
  const group = s.match(reg);

  const max = Math.pow(2, 31) - 1;
  const min = -max - 1;

  let res = 0;

  if (group) {
    // 将捕获组转成数字
    res = +group[1];

    // 当然 也有可能存在只有+或者-的情况
    if (isNaN(res)) res = 0;
  }

  res = res > max ? max : res;
  res = res < min ? min : res;

  return res;
};

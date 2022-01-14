/**
 * time 2022.01.14
 * 
 * @param {string} s
 * @return {string}
 */

// 使用from转数组 然后手动删除" "
var reverseWords = function (s) {
  // 字符串转数组
  const strArr = Array.from(s);
  // 移除多余空格
  removeExtraSpaces1(strArr);
  // 翻转
  reverse1(strArr, 0, strArr.length - 1);

  let start = 0;

  for (let i = 0; i <= strArr.length; i++) {
    if (strArr[i] === " " || i === strArr.length) {
      // 翻转单词
      reverse(strArr, start, i - 1);
      start = i + 1;
    }
  }

  return strArr.join("");
};
// 删除多余空格
function removeExtraSpaces1(strArr) {
  let slowIndex = 0;
  let fastIndex = 0;

  while (fastIndex < strArr.length) {
    // 移除开始位置和重复的空格
    if (
      strArr[fastIndex] === " " &&
      (fastIndex === 0 || strArr[fastIndex - 1] === " ")
    ) {
      fastIndex++;
    } else {
      strArr[slowIndex++] = strArr[fastIndex++];
    }
  }
  // 移除末尾空格
  strArr.length = strArr[slowIndex - 1] === " " ? slowIndex - 1 : slowIndex;
}
// 翻转从 start 到 end 的字符
function reverse1(strArr, start, end) {
  let left = start;
  let right = end;

  while (left < right) {
    // 交换
    [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
    left++;
    right--;
  }
}

// 使用split()转数组 然后手动删除""
var reverseWords2 = function (s) {
  var strArr = s.split(" ");

  // 删除多余的""
  removeNull2(strArr);

  var left = -1;
  var right = strArr.length;

  while (++left < --right) {
    [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
  }

  return strArr.join(" ");
};
function removeNull2(strArr) {
  var fastIndex = 0;
  var slowIndex = 0;

  while (fastIndex < strArr.length) {
    if (strArr[fastIndex] !== "") {
      strArr[slowIndex++] = strArr[fastIndex++];
    } else {
      fastIndex++;
    }
  }
  strArr.length = slowIndex;
}

// 同第二种方法 但是用splice()直接删除""
var reverseWords3 = function (s) {
  var strArr = s.split(" ");
  var length = strArr.length;
  for (var i = 0; i < length; i++) {
    if (strArr[i] === "") {
      strArr.splice(i--, 1);
    }
  }
  length = strArr.length;
  var left = 0;
  var right = length - 1;

  for (var i = 0; i < length / 2; i++) {
    [strArr[i], strArr[right - i]] = [strArr[right - i], strArr[i]];
  }

  return strArr.join(" ");
};
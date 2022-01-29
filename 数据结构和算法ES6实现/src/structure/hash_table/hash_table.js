// {"key": value}

function hashFunc(str, max) {
  // 定义hashCode
  let hashCode = 0;

  // 霍纳算法
  for (let i = 0; i < str.length; i++) {
    hashCode = 31 * hashCode + str.charCodeAt(i);
  }
  hashCode = hashCode % max;

  return hashCode;

  return hashCode;
}

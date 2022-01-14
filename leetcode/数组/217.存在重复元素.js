// 利用Array.prototype.indexOf()这个API
var containsDuplicate1 = function (nums) {
  var newArray = [];
  for (var i = 0; i < nums.length; ++i) {
    if (newArray.indexOf(nums[i]) === -1) newArray.push(nums[i]);
    else return true;
  }
  console.log(newArray);
  return false;
};
// 利用Set Set的值是唯一的
var containsDuplicate2 = function (nums) {
  var mySet = new Set(nums);
  return mySet.size !== nums.length;
};
// 利用Map Map的键是唯一的
var containsDuplicate3 = function (nums) {
  var myMap = new Map();
  var i = 0;
  while (nums[i] !== undefined) {
    if (myMap.has(nums[i])) return true;
    else myMap.set(nums[i], 1);
    i++;
  }
  return false;
};
// 排序 然后检测有无相同元素 优化就是不同的排序方法
var containsDuplicat4 = function (nums) {
  nums.sort((a, b) => a - b);
  for (var i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }
  return false;
};

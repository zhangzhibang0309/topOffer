/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 左闭右开
var search = function (nums, target) {
  var left = 0,
    right = nums.length;
  while (left < right) {
    var mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > target) right = mid;
    else if (nums[mid] < target) left = mid + 1;
    else return mid;
  }
  return -1;
};

// 左闭右闭
var search = function (nums, target) {
  var left = 0,
    right = nums.length - 1;
  while (left <= right) {
    var mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > target) right = mid - 1;
    else if (nums[mid] < target) left = mid + 1;
    else return mid;
  }
  return -1;
};

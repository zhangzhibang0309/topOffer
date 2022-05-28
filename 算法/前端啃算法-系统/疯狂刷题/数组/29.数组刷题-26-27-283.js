// 26.删除有序数组重复元素
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let fast = 0;
  let slow = 0;
  while (fast < nums.length) {
    if (nums[slow] !== nums[fast]) {
      nums[++slow] = nums[fast];
    }

    fast++;
  }

  return slow + 1;
};

// 27.移除元素
let removeElement = function (nums, val) {
  let index = 0;
  nums.forEach((item) => {
    if (item !== val) nums[index++] = item;
  });

  return index;
};


// 283.移动零
var moveZeroes = function (nums) {
  let slow = 0
  let fast = 0

  while (fast < nums.length) {
      if (nums[fast]) {
          [nums[slow], nums[fast]] = [nums[fast], nums[slow]]
          slow++
      }

      fast++
  }
};
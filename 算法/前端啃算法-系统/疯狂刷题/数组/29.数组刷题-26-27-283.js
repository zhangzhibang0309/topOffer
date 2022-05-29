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
function removeElement(nums, val) {
  let slow = 0;
  let fast = 0;

  while (fast < nums.length) {
    if (nums[fast] !== val) nums[slow++] = nums[fast];

    fast++;
  }

  return slow;
}

// 283.移动零
function moveZeroes(nums) {
  let slow = 0;
  let fast = 0;

  while(fast < nums.length) {
    if(nums[fast] !== 0){
      [nums[slow],nums[fast]] = [nums[fast],nums[slow]]
      slow++
    }
    fast++
  }
};
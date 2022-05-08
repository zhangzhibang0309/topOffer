/**
 * time 2022.01.15
 * 
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
// 自己写的 不知道什么鬼东西 但其实也是双指针
 var removeElement = function (nums, val) {
    let count = 0;
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === val) count++;
    }
  
    let initLength = nums.length;
    let length = nums.length + count;
    let fastIndex = length - 1;
    let mediumIndex = initLength - 1;
  
    for (let i = 0; (length - 1 - fastIndex) < count; i++) {
      if (nums[i] === val) {
        [nums[i], nums[fastIndex]] = [nums[fastIndex], nums[i]];
        fastIndex--;
      }
    }
  
    console.log(nums)
  
    for (let i = 0; i < nums.length - 2 * count; i++) {
      while (nums[mediumIndex] === undefined) {
        mediumIndex--
      }
  
      if (nums[i] === undefined) {
        [nums[i], nums[mediumIndex]] = [nums[mediumIndex], nums[i]];
        mediumIndex--
      }
    }
    return nums.length - 2* count
  }
  
// 精简写法 双指针
var removeElement = function (nums, val) {
    let slowIndex = 0;
    for(let i = 0;i <nums.length; i++) {
      if(nums[i] !== val) {
        nums[slowIndex++] = nums[i]
      }
    }
    return slowIndex
  }
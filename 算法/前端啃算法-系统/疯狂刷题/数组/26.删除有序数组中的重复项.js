


var removeElement = function (nums, val) {
  let left = 0
  let right = nums.length - 1
  let k = 0
  for(let i = 0; i < nums.length;i++) {
      if(nums[i] !== val) {
          nums[k++] = nums[i]
      }
  }
  return k
};Z
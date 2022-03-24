/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 这题我实在是没想出来他想考什么，只能是判断一下大概在前半部分还是后半部分，但也很简单，似乎没什么太大的优化空间了。
 var search = function (nums, target) {
    let flag = -1
    if (target > nums[0]) {
        nums.forEach((v, i) => {
            if (target === v) {
                flag = i
            }
        })
    } else {
        for (let i = nums.length-1; i >= 0; i--) {
            if(target === nums[i]) flag = i
        }
    }


    return flag
};
/**
 * @param {number[]} 
 * @return {boolean}
 */
// 一道贪心 真O(n)
 var canJump = function (nums) {
    let last = nums[0]
    let len = nums.length

    for (let i = 0; i <= len; i++) {
        // 如果目前所存储的点能到达现在正在遍历的点
        if (i <= last) {
            // 那么就比较，谁更远
            last = Math.max(last, i + nums[i])
        }
        if (last >= len - 1) {
            return true
        }
    }
    return false
};

// 模拟
var canJump = function (nums) {
    if (nums.length === 1) return true
    let flag = false
    let len = nums.length
    // 遍历，如果遇到零，去看前面有没有能越过0的元素
    // 也就是
    for (let i = 0; i <= len; i++) {
        let cnt = i
        if (nums[cnt] === 0) {
            while (cnt--) {
                if (nums[cnt] > i - cnt || nums[cnt] >= (len - 1) - cnt) {
                    flag = true
                    break
                }
            }
            if (cnt === -1) {
                return false
            }
        }
    }
    return true
};
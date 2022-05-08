/**
 * time 2022.02.09
 * 
 * @param {number[]} nums
 * @return {number}
 */
// 瞎写 复杂度挺高 好久没做数组 我竟然给数组一个一个移动了 离谱
 var removeDuplicates = function (nums) {
    let left = 0
    let right = 1

    while (!isNaN(nums[right])) {

        while (nums[left] === nums[right]) {
            right++
        }

        let tempL = left + 1
        let tempR = right
        right = tempL

        while (!isNaN(nums[tempR]) ) {
            nums[tempL] = nums[tempR]
            tempL++
            tempR++
        }
        nums.length = tempL
        left++
        right++
    }

    return nums.length
};
// 不但将新值往前覆盖 时间复杂度O(n) 空间复杂度O(1)
var removeDuplicates = function (nums) {

    let s = 1

    for (let f = 1; f < nums.length; f++) {
        if (nums[f] !== nums[f - 1]) {
            nums[s] = nums[f]
            s++
        }
    }
    nums.length = s

    return s
};
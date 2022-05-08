/**
 * @param {number[]} nums
 * @return {number}
 */
// 这其实是简单dp。
// 第一次做可能想不到这一层，不过不是很难。
// 我们用一个curSum变量来记录当前累加和，当前和如果>0，那就说明对我们后面的累加有帮助，即使后面碰上了负数，那curSum是正数我们页不能抛弃。
// 但是如果curSum是负数了，那毫无疑问没前面的妹用了，抛弃，不要怕前面的某几项我们已经取过了最大值，因为后面我们在更改res值得时候，我们都会max一下。
var maxSubArray = function (nums) {
    // 这个地方还是需要注意一下，如果让res = 0，如果出现只有一个负数的情况就寄了。最大值可能是0，但其实应该是这个负数本身。
    let res = nums[0]
    let curSum = 0

    nums.forEach(item => {
        if (curSum > 0) {
            curSum += item
        }
        else {
            curSum = item
        }
        res = Math.max(res, curSum)
    })

    return res
};


// 期待一下分治法
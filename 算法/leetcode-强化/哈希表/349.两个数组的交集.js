/**
 *  Time 2022.03.02
 *  标签：哈希表 数组 双指针
 * 
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function (nums1, nums2) {
    const map1 = new Map()
    const map2 = new Map()
    let res = []

    for (let i = 0; i < nums1.length; i++) {
        map1.set(nums1[i], 1)
    }
    for (let i = 0; i < nums2.length; i++) {
        map2.set(nums2[i], 1)
    }

    map1.forEach((value, key) => {
        if (map2.get(key)) {
            res.push(key)
        }
    })

    return res
};
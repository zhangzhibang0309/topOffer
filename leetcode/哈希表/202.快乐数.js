/**
 * Time 2022.03.02
 * 标签：哈希表 数学 指针？
 * 
 * @param {number} n
 * @return {boolean}
 */
 var isHappy = function (n) {
    const map = new Map()

    while (n !== 1) {

        temp = n
        let resT = 0
        while (temp > 0) {
            resT += (temp % 10) ** 2
            temp = parseInt(temp / 10)
        }
        if (map.get(resT) !== undefined) return false
        map.set(resT, 1)
        n = resT
    }

    return true
};
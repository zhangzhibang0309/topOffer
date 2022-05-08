/**
 * Time 2022.03.02
 * 标签：哈希表 字符串 排序？
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function (s, t) {
    if(s.length !== t.length) return false

    const mapS = new Map()
    const mapT = new Map()

    for (let i = 0; i < s.length; i++) {
        mapS.set(s[i], mapS.get(s[i]) === undefined ? 1 : mapS.get(s[i]) + 1)
        mapT.set(t[i], mapT.get(t[i]) === undefined ? 1 : mapT.get(t[i]) + 1)
    }

    console.log(mapS)
    console.log(mapT)

    let flag = true

    mapS.forEach((value, key) => {
        if(mapT.get(key) !== value) {
            console.log("a")
            flag = false
        }
    })

    return flag
};
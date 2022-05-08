/**
 * time 2022.01.27
 * 
 * @param {number[][]} properties
 * @return {number}
 */
// 直接排序加拍平 然后导致力扣上时间5000ms cao
 var numberOfWeakCharacters = function (properties) {
    properties.sort((arr1, arr2) => arr1[0] - arr2[0])
    let newArray = properties.flat()
    let count = 0

    console.log(newArray.length)
    for (let i = 1; i < newArray.length; i += 2) {
        for (let j = i + 2; j < newArray.length; j += 2) {
            if ((newArray[i] < newArray[j]) && (newArray[i - 1] < newArray[j - 1])) {
                count++
                break
            }
        }
    }
    console.log(newArray)
    return count
};
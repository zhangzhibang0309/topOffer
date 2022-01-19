/**
 * time 2022.01.19
 * 
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let j = 0

    while (j < strs[0].length) {
        let arr = []
        for (let i = 0; i < strs.length; i++) {
            arr.push(strs[i][j])
        }

        let map = new Set(arr)
        if (map.size === 1) {
            j++
            continue
        }
        else return strs[0].slice(0, j)
    }

    return strs[0].slice(0, j)
};

// 使用栈
// 字符串做栈
var longestCommonPrefix = function(strs) {
    let resultStack = strs[0];
    for(i=1;i<strs.length;i++){
        for(j=resultStack.length-1;j>=0;j--){
            if(!strs[i].startsWith(resultStack)){
                resultStack = resultStack.slice(0,resultStack.length-1)
            }else{
                j=-1;
            }
        }
    }
    return resultStack||'';
};
// 数组做栈
var longestCommonPrefix = function(strs) {
    let resultStack = strs[0].split('');
    for(i=1;i<strs.length;i++){
        for(j=resultStack.length-1;j>=0;j--){
            if(!strs[i].startsWith(resultStack.join(''))){
                resultStack.pop();
            }else{
                j=-1;
            }
        }
    }
    return resultStack.join('');
};
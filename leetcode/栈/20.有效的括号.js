/**
 * time 2022.02.18
 * 
 * @param {string} s
 * @return {boolean}
 */

// 用栈 时间复杂度O(n) 空间复杂度O(1)
 var isValid = function (s) {
    const stack = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') stack.push(s[i])
        else {
            // 判断只有一个右括号的情况
            if (stack.length === 0) return false
            
            let l = stack.pop()
            if(l === "(" && s[i] !== ")" || l === "[" && s[i] !== "]" || l === "{" && s[i] !== "}") return false
        }
    }

    return stack.length === 0
};
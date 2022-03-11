/**
 * 栈与队列基本不会直接出现在题目中，但是很多题都会用到栈和队列的思想
 * 我们学习栈和队列，要深入到题目中去，在应用场景种建立起正确的感知，慢慢的，很多线索都会在分析的过程中被挖掘出来
 */


// 第一道 有效括号问题
/**
 * 有效括号用到了栈
 * 思路就是遇到左括号，入栈对应的右括号
 * 遇到右括号，弹出栈顶元素，如果栈为空，或者不相等，那么说明不是有效括号
 * 如果最后栈里面还有剩余的元素，那么说明括号多一个单的，也不是有效括号
 * 
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function (s) {
    const leftToRight = {
        '(': ')',
        '{': '}',
        '[': ']'
    }

    const stack = []

    for (let i = 0; i < s.length; i++) {
        const ch = s[i]
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(leftToRight[ch])
        }else {
            if(!stack.length || stack.pop() !== s[i]) return false
        }
    }

    return !stack.length
};
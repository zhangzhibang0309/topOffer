/**
 * Time 2022.03.06
 * 
 */
// 
var WordDictionary = function () {
    this.words = new Map()
};

/** 
 * @param {string} word
 * @return {void}
 */
// 添加单词，这里只对应字符串，不需要考虑正则
// 几个思路点：
//  1.存放字符串 采用map 但是用字符串长度最为key 这样做在查找的时候 对普通字符串 其实是更损耗性能的 因为搞到数组里面还得用includes去查找 直接用map肯定是更快的 
//  但是对于正则表达式的匹配 如果不先匹配长度的话 就要遍历整个map去匹配 将长度搞成key无疑效率是更高的

//  2.对于这种出现.啥的 字符串匹配 要去考虑正则表达式
WordDictionary.prototype.addWord = function (word) {
    if (this.words.get(word.length)) this.words.get(word.length).push(word)
    else this.words.set(word.length,[word])
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    // 长度都匹配不上
    if(!this.words.get(word.length)) return false

    // 如果是字符串
    if(!word.includes('.')) {
        return this.words.get(word.length).includes(word)
    }

    // 如果是正则表达式
    const reg = new RegExp(word)
    return this.words.get(word.length).some(item => {
        return reg.test(item)
    })
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

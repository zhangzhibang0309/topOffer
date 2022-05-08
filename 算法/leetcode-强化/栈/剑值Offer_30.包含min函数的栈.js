/**
 * Time 2022.03.12
 * 
 * initialize your data structure here.
 */
// 其他都很简单，就是有一个min函数，要拿到最小值
// 这个题没有什么太大问题，但是有一点，试想一下，如果你一直pop()，把所有stack2里面的元素都pop出去了那咋办？
// 仔细想一下，其实并没有什么问题，首先，我们第一个元素是入栈stack2的，后面比它大的不入栈2，所以即使pop，我们stack2里面的第一个元素也不会被pop出去，如果有相同的，那么我们就继续让它入栈2就可以了，那碰到更小的，毫无疑问继续入栈，所以，只要是pop，大的元素不会令stack出栈，小的元素和相等的元素我们都提前入过栈2了，所以本来就不需要有这个顾虑。
 var MinStack = function () {
    this.stack = []
    this.stack2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
    this.stack.push(x)

    if(this.stack2.length === 0 || this.stack2[this.stack2.length - 1] >= x) this.stack2.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    if (!this.stack || !this.stack.length) return

    if(this.stack.pop() === this.stack2[this.stack2.length - 1]) this.stack2.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
    if (!this.stack || !this.stack.length) return

    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
    return this.stack2[this.stack2.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */
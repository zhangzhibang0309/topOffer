/**
 * Time 2022.03,12
 * 
 */
var MyQueue = function () {
    this.stack1 = []
    this.stack2 = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.stack1.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    // 现在需要pop，我们要从stack2 pop

    // 如果stack为空
    if (!this.stack2.length) {
        // 循环遍历stack1，因为现在stack为空，所以要使stack1的所有元素入栈stack2
        while (this.stack1.length) {
            this.stack2.push(this.stack1.pop())
        }
    }

    return this.stack2.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    // 现在需要pop，我们要从stack2 pop

    // 如果stack为空
    if (!this.stack2.length) {
        // 循环遍历stack1，因为现在stack为空，所以要使stack1的所有元素入栈stack2
        while (this.stack1.length) {
            this.stack2.push(this.stack1.pop())
        }
    }

    return this.stack2[this.stack2.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return !this.stack1.length && !this.stack2.length
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

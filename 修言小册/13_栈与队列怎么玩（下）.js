// 队列

// 首先是队列最基本的
// 用栈实现队列
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



// 第二，有些难度的双端队列
var maxSlidingWindow = function (nums, k) {
    const len = nums.length

    const deque = []
    const res = []

    for (let i = 0; i < len; i++) {
        // 我们要维护一个递减队列
        // 在入队deque之前，因为要保持递减，所以要删除deque后面小于num[i]的值
        // 这里一定是>=，如果只是>的话，不知为何，运行时间会很长
        while(deque.length && nums[i] >= nums[deque[deque.length - 1]]) {
            // 不断弹出
            deque.pop()
        }

        // 处理好deque后面的元素，使能继续递减，然后入栈deque
        // push之后，仍然是一个递减队列
        deque.push(i)

        // 因为是个滑动窗口，所以要保证目前在deque里面的所有元素都在目前窗口的范围内
        if(deque[0] <= i - k) deque.shift()

        // 写入res数组
        // 要判断现在已经遍历到第一个滑动窗口的最右端
        if(i >= k - 1) res.push(nums[deque[0]])
    }

    return res
};
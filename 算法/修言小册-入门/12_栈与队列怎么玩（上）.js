/**
 * 栈与队列基本不会直接出现在题目中，但是很多题都会用到栈和队列的思想
 * 我们学习栈和队列，要深入到题目中去，在应用场景种建立起正确的感知，慢慢的，很多线索都会在分析的过程中被挖掘出来
 */

// 栈


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
    "(": ")",
    "{": "}",
    "[": "]",
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === "(" || ch === "{" || ch === "[") {
      stack.push(leftToRight[ch]);
    } else {
      if (!stack.length || stack.pop() !== s[i]) return false;
    }
  }

  return !stack.length;
};

// 第二道，每日体温，维护一个单调递减栈
const dailyTemperatures = function (T) {
  const len = T.length;
  // 初始化一个栈存储索引
  const stack = [];
  // 初始化结果数组，因为一定与T的length相同，直接规定长度
  const res = new Array(len).fill(0);

  for (let i = 0; i < len; i++) {
    // 当遇到递增序列的时候
    // stack里面的最后一个元素就是T[i - 1]，当然这是指第一次打破递减序列的时候
    // 当然如果stack里面没有元素的话说明已经把所有的都对比完了，跳出循环
    while (T[i] > T[stack[stack.length - 1]] && stack.length) {
      // 开始进行对比
      // 由于上面我们已经对top和T[i]做过大小的判断，这里我们确定可以出栈
      const top = stack.pop();
      // 出栈之后应该干嘛呢，当然是确定top的值（也就是后面几步值会增大），并且将它放到res里面
      // 因为top是索引，所以直接top就可以定位到在res中的位置
      // 那么top的值又应该是什么呢？就是现在的i减去top
      res[top] = i - top;

      // 到此位置，i索引前面所有比自己小的全部都计算出值并且放到res了
    }

    // 到这里，说明在i之前已经没有比自己小的了，那么我们就应该继续往后探索
    // 当然也有可能仅仅只是正处在递进序列中
    // 当然就是给stack最后添加索引
    stack.push(i);
  }

  return res;
};


// 第三道，题目描述：设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。
// 这个min方法要求O(1)
// 其实也是维护了一个单调递减栈。

// 其他都很简单，就是有一个min函数，要拿到最小值
// 这个题没有什么太大问题，但是有一点，试想一下，如果你一直pop()，把所有stack2里面的元素都pop出去了那咋办？
// 仔细想一下，其实并没有什么问题，首先，我们第一个元素是入栈stack2的，后面比它大的不入栈2，所以即使pop，我们stack2里面的第一个元素也不会被pop出去，如果有相同的，那么我们就继续让它入栈2就可以了，那碰到更小的，毫无疑问继续入栈，所以，只要是pop，大的元素不会令stack出栈，小的元素和相等的元素我们都提前入过栈2了，所以本来就不需要有这个顾虑。
/**
 * initialize your data structure here.
 */
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
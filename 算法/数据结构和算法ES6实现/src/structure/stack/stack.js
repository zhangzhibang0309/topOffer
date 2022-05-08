export class Stack {
  constructor() {
    this.items = [];
  }
  // push(element): 添加一个新元素到栈顶位置
  push(element) {
    this.items.push(element);
  }
  // pop(): 移除栈顶的元素,同时返回被移除的元素.
  pop() {
    return this.items.pop();
  }
  // peek(): 返回栈顶的元素,不对栈做任何修改(这个方法不会移除栈顶的元素,仅仅返回它)
  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length];
  }
  // isEmpty(): 如果栈李没有任何元素就返回true,否则返回false
  isEmpty() {
    return this.items.length === 0;
  }
  //   size(): 返回栈里的元素个数。这个方法和数组的length属性很类似
  size() {
    return this.items.length;
  }
}

export function dec2bin(num) {
  const numInit = num;
  // 1.创建stack
  const stack = new Stack();
  // 2.循环取余数
  while (num > 0) {
    let remainder = num % 2;
    num = parseInt(num / 2);
    stack.push(remainder);
  }

  // 3.拼接字符串
  let binString = `${numInit}的二进制是`;
  while (!stack.isEmpty()) {
    binString += stack.pop();
  }
  return binString;
}

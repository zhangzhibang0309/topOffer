/**
 * 前面讲了数组，这里围剿线性数据结构
 */
// 栈和队列

// 前置数组知识
// 数组中增加元素三种方式
// const arr = [1,2]
// arr.push(10) // 从尾部
// arr.unshift(0) // 从头部
// arr.splice(1,1,111,222) // splice第一个参数是指定索引，第二个参数是从索引处删除几个元素，之后的元素是从索引处插入什么元素
// console.log(arr)

// 数组中删除元素的三种方式
// const arr = [1,2]
// arr.pop() // 从尾部开始删除
// arr.shift() // 从头部开始删除
// arr.splice(0,1) // 从索引0开始删除一个元素

/**栈
 * 只允许从尾部添加元素 push
 * 只允许从尾部取出元素 pop
 *
 * 说白了，stack就是只用push和pop添加删除元的的数组
 */

// 基本操作就是push和pop

// 访问栈顶元素
// const stack = [1, 2, 3];
// console.log(stack[stack.length - 1]);

/**队列
 * 只允许从尾部添加元素
 * 只允许从头部移除元素
 *
 *  queue就是只用push和shift添加删除元素的数组
 */

// push和shift

// 访问对头元素
// const queue = [1, 2, 3];
// console.log(queue[0])

/**链表
 *
 *
 */

// 链表的基本形式
const List = {
  // 数据域
  val: 1,
  // 指针域，指向下一个结点
  next: {
    val: 2,
    next: null,
  },
};

// 链表节点的创建
function listNode(val) {
  this.val = val;
  this.next = null;
}
// const node = new listNode(1);
// node.next = new listNode(2);

// 链表元素的添加
// const node1 = new listNode(1);
// node1.next = new listNode(2);

// const node3 = new listNode(3);
// node3.next = node1.next;
// node1.next = node3;
// console.log(node1)

// 链表元素的删除
// const node1 = new listNode(1);
// node1.next = new listNode(2);

// const node3 = new listNode(3);
// node3.next = node1.next;
// node1.next = node3;

// node1.next = node3.next;// node3没有了前驱，就会被回收掉
// console.log(node1)

// 链表和数组的辨析
// js的数组有点奇怪
// 谨记“JS 数组未必是真正的数组”
const arr = ["haha", 1, { a: 1 }];

// 链表的优点:
// 相对于数组来说，链表有一个明显的优点，就是添加和删除元素都不需要挪动多余的元素。

// 辨析链表和数组
// 高效的增删操作
// 在链表中，添加和删除操作的复杂度是固定的——不管链表里面的结点个数 n 有多大，只要我们明确了要插入/删除的目标位置，那么我们需要做的都仅仅是改变目标结点及其前驱/后继结点的指针指向。 因此我们说链表增删操作的复杂度是常数级别的复杂度，用大 O 表示法表示为 O(1)。

// 但是链表也有一个弊端：当我们试图读取某一个特定的链表结点时，必须遍历整个链表来查找它。比如说我要在一个长度为 n（n>10） 的链表里，定位它的第 10 个结点，我需要这样做：
// 记录目标结点的位置
const index = 10;
// 设一个游标指向链表第一个结点，从第一个结点开始遍历
let node = head;
// 反复遍历到第10个结点为止
for (let i = 0; i < index && node; i++) {
  node = node.next;
}
// 随着链表长度的增加，我们搜索的范围也会变大、遍历其中任意元素的时间成本自然随之提高。这个变化的趋势呈线性规律，用大 O 表示法表示为 O(n)。

// 但在数组中，我们直接访问索引、可以做到一步到位，这个操作的复杂度会被降级为常数级别(O(1))：
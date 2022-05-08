/**
 * time 2022.01,30
 * 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

// 简单粗暴 手写链表
var MyLinkedList = function () {
    this.head = null
    this.length = 0
};

var listNode = function (val, next) {
    this.val = val ?? 0
    this.next = next ?? null
}
/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    if (index < 0 || index > this.length - 1) return -1

    let count = 0
    let cur = this.head
    while (count++ < index) {
        cur = cur.next
    }
    console.log('get--', this.head)

    return cur.val
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    const newHead = new listNode(val)

    newHead.next = this.head
    this.head = newHead

    this.length++

    console.log('addAtHead--', this.head)

};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    const newTail = new listNode(val)

    const virtualHead = new listNode()
    virtualHead.next = this.head

    let cur = virtualHead

    while (cur.next) {
        cur = cur.next
    }
    cur.next = newTail
    this.head = virtualHead.next
    this.length++
    console.log('addAtTail--', this.head)
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    // 处理边界
    index < 0 ? 0 : index
    if (index > this.length) return -1

    let virtualHead = new listNode(0)
    virtualHead.next = this.head
    let cur = virtualHead
    let pre = null
    let count = 0

    while (count++ <= index) {
        pre = cur
        cur = cur.next
    }

    const newNode = new listNode(val)
    newNode.next = cur
    pre.next = newNode
    this.head = virtualHead.next

    this.length++
    console.log('addAtIndex--', this.head)
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index < 0 || index > this.length - 1) return -1

    let virtualHead = new listNode(0)
    virtualHead.next = this.head
    let cur = virtualHead
    let pre = null
    let count = 0

    while (count++ <= index) {
        pre = cur
        cur = cur.next
    }

    pre.next = pre.next.next
    this.head = virtualHead.next
    this.length--

    console.log('deletAtIndex--', this.head)
};
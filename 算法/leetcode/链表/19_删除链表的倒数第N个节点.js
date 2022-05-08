/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Time 2022.02.28
 * 
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 暴力 时间O(n) 空间O(1) 但是这个算是扫描两次链表
 var removeNthFromEnd = function (head, n) {
    let vHead = new ListNode()
    vHead.next = head

    let headNode = vHead

    let count = -1;
    while (headNode) {
        headNode = headNode.next
        count++
    }

    headNode = vHead
    const resC = count - n + 1
    for (let i = 0; i < resC - 1; i++) {
        headNode = headNode.next
    }

    headNode.next = headNode?.next?.next
    return vHead.next
};

// 双指针 时间O(n) 空间O(1) 扫描一次链表
var removeNthFromEnd = function (head, n) {
    // 虚拟头节点，方便处理只有一个节点的情况
    let vHead = new ListNode(0,head)

    // 快慢指针
    let fast = vHead
    let slow = vHead

    // 先让fast指针跑一个n 指向第n个节点
    while(n--) fast = fast.next

    // 两个指针一起跑，让slow指向倒数第n个节点前面一个node
    while(fast.next) {
        fast = fast.next
        slow = slow.next
    }

    slow.next = slow.next.next

    return vHead.next
};
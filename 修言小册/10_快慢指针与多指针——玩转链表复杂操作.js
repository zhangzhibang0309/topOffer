/**
 * 本章讲解关于链表的一些复杂操作
 * 主要是一些涉及反复遍历的题目
 * 用到的主要方法是快慢指针和多指针
 */

/**
 * 快慢指针
 * 删除链表的倒数第n个节点
 * 一趟遍历
 * 解决思想是倒数变整数
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const vHead = new ListNode(0, head);
  let fast = vHead;
  let slow = vHead;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;

  return vHead.next;
};

/**
 * 多指针
 * 反转链表
 * 用三指针特别简单
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let pre = null;
  let cur = head;
  let next = head?.next;

  while (cur) {
    cur.next = pre;
    pre = cur;
    cur = next;
    next = next?.next;
  }

  return pre;
};

/**
 * 反转链表Ⅱ
 * 多指针 然后处理一些复杂操作细节
 * 这题主要难在一些边界条件
 * 
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function (head, left, right) {
    let pre, cur, next, leftHead, start;

    const dummy = new ListNode(0, head);

    let p = dummy;
    for (let i = 0; i < left - 1; i++) {
        p = p.next;
    }

    leftHead = p;
    start = p.next;

    pre = start;
    cur = pre.next;
    next = cur?.next;

    for (let i = left; i < right; i++) {
        cur.next = pre;
        pre = cur;
        cur = next;
        next = next?.next;
    }

    start.next = cur;
    leftHead.next = pre;

    return dummy.next
};
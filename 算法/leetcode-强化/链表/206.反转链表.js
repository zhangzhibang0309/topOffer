/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * time 2022.01.27
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
// 递归
var reverseList = function (head) {
  if (head === null || head.next === null) return head;

  let ret = reverseList(head.next);
  head.next.next = head;
  head.next = null;

  return ret;
};

// 迭代
var reverseList = function (head) {
  let cur = head;
  let pre = null;

  while (cur !== null) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }

  return pre;
};

// 一种奇怪的双指针
var reverseList = function (head) {
  if (!(head ?? false)) return head;

  let cur = head;
  let low = head;

  while (head.next ?? false) {
    low = cur;
    cur = head.next;
    head.next = cur.next;
    cur.next = low;
  }
  return cur;
};

// 206反转链表
var reverseList = function (head) {
  let prev = null;
  let cur = head;

  while (cur) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
};

// 19删除链表的到数第N个节点
var removeNthFromEnd = function (head, n) {
  let slow = head;
  let fast = head;
  for (let i = 0; i < n - 1; i++) {
    fast = fast.next;
  }
  while (fast.next.next) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;

  return head;
};

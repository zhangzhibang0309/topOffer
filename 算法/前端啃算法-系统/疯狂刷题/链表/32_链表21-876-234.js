// 21.合并两个有序链表
var mergeTwoLists = function (list1, list2) {
  let dummy = {
      next: null
  }
  let tmp = dummy
  while (list1 && list2) {
      if (list1.val <= list2.val) {
          tmp.next = list1
          list1 = list1.next
      } else {
          tmp.next = list2
          list2 = list2.next
      }
      tmp = tmp.next
  }

  tmp.next = list1 === null ? list2 : list1
  return dummy.next
};

// 86.链表的中间节点
var middleNode = function (head) {
  let slow = head
  let fast = head

  while(fast?.next) {
      fast = fast.next?.next
      slow = slow.next
  }
  return slow
};
/**
 * 链表本身就有一些很复杂的题目，这里总结三种
 * 链表的处理：合并，删除（删除很重要）
 * 链表的反转及其衍生题目
 * 链表成环问题极其衍生题目
 */

// 这一章只介绍链表基本操作
/**
 * 合并两个有序链表
 *
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function (list1, list2) {
    const head = new ListNode();
    let cur = head;
  
    while (list1 && list2) {
      if (list1.val <= list2.val) {
        cur.next = list1;
        list1 = list1.next;
      } else {
        cur.next = list2;
        list2 = list2.next;
      }
  
      cur = cur.next;
    }
  
    cur.next = list1 === null ? list2 : list1;
  
    return head.next;
  };
  
/**
 * 链表去重
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let cur = head;
  
    while (cur && cur.next) {
      if (cur.val === cur.next.val) {
        cur.next = cur.next.next;
      } else {
        cur = cur.next;
      }
    }
  
    return head;
  };
  


/**
 * 删除链表中重复出现的元素，全部删除
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
 var deleteDuplicates = function (head) {
    const vHead = new ListNode(0, head)
    let cur = vHead

    while (cur.next) {
        if (cur.next.val === cur.next.next?.val) {
            let temp = cur
            cur = cur.next
            while (cur?.val === cur.next?.val) {
                cur = cur.next
            }
            temp.next = cur.next
            cur = temp
        } else {
            cur = cur.next
        }
    }

    return vHead.next
};
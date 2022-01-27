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
 * @return {boolean}
 */
// 1.比较标准的模板 时间O(n) 空间O(1)
var isPalindrome = function (head) {
  // 1.拿到后半段链表的head
  let lNodeTail = mid(head);
  let listNodeRightHead = lNodeTail.next;
  // 2.反转后半段链表
  let listNodeRight = reverse(listNodeRightHead);
  // 3.对比
  const res = compare(head, listNodeRight);
  return res;
};
// 找中点
function mid(head) {
  let low = head;
  let fast = head;
  // 这里对js选手来说是个坑 ?如果没有找到不会报错而是返回undefined 然后undefined !=== null 直接返回true了
  while ((low.next ?? false) && (fast.next?.next ?? false)) {
    low = low.next;
    fast = fast.next?.next;
  }
  return low;
}
// 反转链表
function reverse(head) {
  let pre = null;
  let cur = head;
  while (cur !== null) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
}
// 对比
function compare(headL, headR) {
  while (headR != null) {
    if (headL.val !== headR.val) return false;
    headL = headL.next;
    headR = headR.next;
  }
  return true;
}


// 2.自己写的 递归 利用数组 时间O(n) 空间O(n) 
var isPalindrome = function (head) {
  let arr = [];
  recursion(head, arr);

  for (let i = 0; i < arr.length; i++) {
    if (head.val !== arr[i]) return false;
    head = head.next;
  }
  return true;
};
function recursion(node, arr) {
  if (node.next !== null) recursion(node.next, arr);
  arr.push(node.val);
}


// 3.递归 时间O(n) 空间O(n) 
var isPalindrome = function (head) {

    let frontPointer;

    const recursivelyCheck = (currentNode) => {
        if (currentNode !== null) {
            if (!recursivelyCheck(currentNode.next)) {
                return false;
            }
            if (currentNode.val !== frontPointer.val) {
                return false;
            }
            frontPointer = frontPointer.next;
        }
        return true;
    }

    var isPalindrome = function (head) {
        frontPointer = head;
        return recursivelyCheck(head);
    };

    return isPalindrome(head)

};


// 4.O(1) 快慢指针
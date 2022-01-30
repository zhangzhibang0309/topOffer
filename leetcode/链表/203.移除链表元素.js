/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * time 2022.01.30
 * 
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// 单独处理head
 var removeElements = function (head, val) {
    while (head?.val === val) {
        head = head.next
    }

    let cur = head
    let pre = cur

    while (cur ?? false) {
        if (cur.val === val) {
            pre.next = cur.next
            cur = cur.next
        } else {
            pre = cur
            cur = cur.next
        }
    }

    return head
};
// 虚拟头节点来处理head
var removeElements = function (head, val) {
    const newHead = new ListNode(0,head)
    let cur = newHead

    while(cur) {
        if(cur?.next?.val === val) {
            cur.next = cur.next.next
            continue
        }
        cur = cur.next
    }

    return newHead.next
};

console.log(0 ?? null)
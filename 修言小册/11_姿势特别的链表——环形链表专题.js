// 普通环形链表
// 这个题目大概有两种思路

// 1.经典快慢指针
// 第一次做这个题可能不明白为什么两个指针一定会相遇，有没有可能两个指针一直错过彼此呢？
// 答案是否，可以这样理解，两个指针尽量挨着的时候，有几种情况呢：
//  1.fast slow，fast在slow左边一格，那下一次移动便会相遇
//  2.fast null slow，下一个状态又变成状态一
//  3.fast null null slow，下一个状态变成状态二，所以无论怎样，定会相遇
var hasCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
};
// 2.flag法
// 这个方法更好理解一点，不过空间复杂度稍高
// 就是去遍历这个链表，给每个遍历过的打上标记,如果有环，再次遍历到之后return
var hasCycle = function (head) {
  while (head) {
    if (head.flag) return true;
    else {
      head.flag = true;
      head = head.next;
    }
  }
  return false;
};
// 求环形起点
// 这个是成环问题的衍生，同样两种方法

// 法一，这里还是可以用flag法，因为第一个flag就是起点
var detectCycle = function (head) {
  while (head) {
    if (head.flag) return head;
    else {
      head.flag = true;
      head = head.next;
    }
  }
  return null;
};
// 法二，用双指针法，这个有点难想，需要用到一点数学运算
// 这个就是双指针，这个题的核心是搞明白一个公式，首先要明白fast和slow一定会相遇一次，设进入环之前走的距离是x，从起点到相遇点是y，从相遇点继续走到起点是z。
// 公式 fast走的：x+y+z+y = slow走的：2 * (x + y) => z = x。
// 由此，我们先找到相遇点，然后让fast回到head，二者再次相遇点便是起点。
var detectCycle = function (head) {
  let slow = head;
  let fast = head;

  while (fast?.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      fast = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }

  return null;
};

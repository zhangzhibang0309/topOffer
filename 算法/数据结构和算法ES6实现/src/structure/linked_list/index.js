import { LinkedList } from "./linked_list";
import { DoublyLinkedList } from "./doubly_linked_list";

// const linkedList = new LinkedList();

// // 测试append
// linkedList.append("aaa");
// linkedList.append("bbb");
// linkedList.append("ccc");
// linkedList.append("ddd");

// console.log(linkedList);

// // 测试insert
// linkedList.insert(0, 111);
// linkedList.insert(3, 333);

// // 测试get
// console.log(linkedList.get(0));
// console.log(linkedList.get(3));

// // 测试indexOf
// console.log(linkedList.indexOf("aaa"));

// // 测试removeAt
// console.log(linkedList.removeAt(0));
// console.log(linkedList.removeAt(3));
// console.log(linkedList);

// // 测试uodate
// console.log(linkedList.update(0, "hhhhhhh"));
// console.log(linkedList);

// // 测试remove
// linkedList.remove("hhhhhhh")
// console.log(linkedList)

/**
 * 测试双向链表
 */
const linkedList = new DoublyLinkedList();

// 测试appendF
linkedList.append("aaa");
linkedList.append("bbb");
linkedList.append("ccc");
linkedList.append("ddd");
console.log(linkedList);

// 测试insert()
linkedList.insert(1, "abc");
linkedList.insert(3, "qwe");
linkedList.insert(0, "000");
linkedList.insert(linkedList.length, "999");
console.log(linkedList);

// 测试get()
console.log(linkedList.get(1));

// 测试indexOf()
console.log(linkedList.indexOf("000"));

// 测试removeAt()
console.log(linkedList.removeAt(0));
console.log(linkedList);

// 测试update()
console.log(linkedList.update(0, "hhhhhhhhhh"));
console.log(linkedList.update(1, "mmmmmmmmmm"));
console.log(linkedList);

// 测试remove(element)
console.log(linkedList.remove("hhhhhhhhhh"));
console.log(linkedList);

// 测试isEmpty
console.log(linkedList.isEmpty());
// 测试size
console.log(linkedList.size());

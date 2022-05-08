import { LinkedList, Node } from "./linked_list";

export class DoublyNode extends Node {
  constructor(element) {
    super(element);
    this.prev = null;
  }
}

export class DoublyLinkedList extends LinkedList {
  constructor() {
    super();
    this.tail = null;
  }
  // append(element): 向列表为不添加一个新的项
  append(element) {
    // 根据element创建元素
    const newNode = new DoublyNode(element);
    if (this.head === null) {
      // 原来没有任何元素
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 找到最后一个节点
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }

  // insert(position,element): 像链表的特定位置插入一个新的项
  insert(position, element) {
    //  越界的判断
    if (position < 0 || position > this.length) return false;
    // 创建node
    const newNode = new DoublyNode(element);
    // 判断多种插入情况
    if (position === 0) {
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    } else if (position === this.length) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    } else {
      let index = 0;
      let current = this.head;
      while (index++ < position) {
        current = current.next;
      }
      // 交换节点信息
      newNode.prev = current.prev;
      newNode.next = current;
      current.prev.next = newNode;
      current.prev = newNode;
    }
    this.length++;

    return true;
  }

  // get(position): 获取对应位置的元素

  // indexOf(element): 返回元素在链表种得索引 如果没有返回-1

  // removeAt(position): 返回删除的元素
  removeAt(position) {
    // 越界判断
    if (position < 0 || position > this.length - 1) return false;

    // 根据不同情况删除元素
    let current = this.head;

    if (position === 0) {
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
    } else if (position === this.length - 1) {
      current = this.tail;
      this.tail.prev.next = null;
      this.tail = this.tail.next;
    } else {
      let index = 0;
      while (index++ < position) {
        current = current.next;
      }
      current.prev.next = current.next;
      current.next.prev = current.prev;
    }
    return current.element;
  }

  // update(position)

  // remove(element)

  // isEmpty(): 如果链表中不包含任何元素,返回true,如果链表长度大于0则返回false

  // size(): 返回链表包含的元素个数，与数组的length类似
}

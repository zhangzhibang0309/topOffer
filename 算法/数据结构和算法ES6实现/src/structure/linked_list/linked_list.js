export class Node {
  constructor(element) {
    // 保存元素
    this.element = element;
    // 指向下一个节点
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // append(element):向链表尾部添加一个新的项
  append(element) {
    // 1.根据element创建Node对象
    const newNode = new Node(element);
    // 2.追加到最后
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  // insert(position,element):向某个位置插入元素
  insert(position, element) {
    // 1.判断越界问题
    if (position < 0 || position > this.length) return false;
    // 2.创建新的节点
    const newNode = new Node(element);
    // 3.插入元素
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let index = 0;
      let current = this.head;
      let previous = null;
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = newNode;
      newNode.next = current;
    }
    this.length++;

    return true;
  }

  // get(position): 获取对应位置的元素
  get(position) {
    // 判断越界问题
    if (position < 0 || position > this.length - 1) return false;
    // 查找该位置的元素
    let index = 0;
    let current = this.head;
    while (index++ < position) {
      current = current.next;
    }

    return current.element;
  }

  // indexof(element): 返回某个元素的索引 如果没有返回-1
  indexOf(element) {
    // 获取第一个元素
    let current = this.head;
    let index = 0;
    // 开始查找
    while (current) {
      if (current.element === element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  // removeAt(position): 从列表忒党的位置移除一项
  removeAt(position) {
    // 判断越界问题
    if (position < 0 || position > this.length - 1) return false;
    // 删除元素
    let current = this.head;
    let index = 0;
    let previous = null;
    if (position === 0) {
      this.head = current.next;
    } else {
      while (index++ < position) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.length--;
    return current.element;
  }
  // update(position,element): 修改某个位置的元素
  update(position, element) {
    // 删除position位置的元素
    const result = this.removeAt(position);
    // 将插入position
    this.insert(position, element);

    return result;
  }

  // remove(element): 从列表中移除一项
  remove(element) {
    // 获取元素的位置
    const index = this.indexOf(element);
    if (index === -1) return false;

    // 删除元素
    this.removeAt(index);

    return index;
  }

  // isEmpty(): 如果链表中不包含任何元素,返回true,如果链表长度大于0则返回false
  isEmpty() {
    return this.length === 0;
  }
  // size(): 返回链表包含的元素个数，与数组的length类似
  size() {
    return this.length;
  }
}

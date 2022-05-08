export class Queue {
  constructor() {
    this.items = [];
  }

  // enQueue(element)： 想队列尾部添加一个（或多个）新的项
  enQueue(element) {
    this.items.push(element);
  }
  // deQueue(): 移除队列的第一 并且返回被移除的元素
  deQueue() {
    return this.items.shift();
  }
  // front(): 返回队列中第一个元素 但是不移除元素
  front() {
    if (this.isEmpty()) return null;
    return this.items[0];
  }
  // isEmpty(): 如果队列中不包含任何元素，返回true，否则false
  isEmpty() {
    return this.items.length === 0;
  }
  // size(): 返回队列包含的元素个数，与数组的length属性类似
  size() {
    return this.items.lengthF;
  }
}

class QueueElemenet {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

export class PriorityQueue extends Queue {
  enQueue(element, priority) {
    // 1,创建QueueElement对象
    const queueElement = new QueueElemenet(element, priority);

    // 2,考虑如何插入新的元素
    if (this.isEmpty()) {
      this.items.push(queueElement);
    } else {
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        // 数字越小优先级越高
        if (this.items[i].priority > queueElement.priority) {
          this.items.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }

      if (!added) this.items.push(queueElement);
    }
  }
  // 其他操作和普通队列都相似了
}

// 击鼓传花 -- 数数 0 1继续循环 2淘汰
export function passGame(nameList, num) {
  // 1.创建队列
  const queue = new Queue();
  for (let i = 0; i < nameList.length; i++) {
    queue.enQueue(nameList[i]);
  }

  // 2.循环让这些人进入到队列
  while (queue.size() > 1) {
    for (let i = 0; i < num - 1; i++) {
      queue.enQueue(queue.deQueue());
    }
    queue.deQueue();
  }

  return queue.front();
}

import { Queue, passGame, PriorityQueue } from "./queue";

// const queue = new Queue();

// queue.enQueue("abc");
// queue.enQueue("qwe");
// queue.enQueue("nba");
// queue.enQueue("npc");

// console.log(queue.items);
// console.log(queue.deQueue());
// console.log(queue.items);
// console.log(queue.front());

// console.log(passGame(["why", "tom", "lilei", "lucy"], 3));

const queue = new PriorityQueue();
queue.enQueue("aaa", 100);
queue.enQueue("qwe", 190);
queue.enQueue("zxc", 222);
queue.enQueue("nba", 321);

queue.items.forEach((item) => {
  console.log(item.element, item.priority);
});

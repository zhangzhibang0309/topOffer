import { Stack } from "./stack";

const stack = new Stack();

stack.push("abc");
stack.push("cba");
stack.push("npc");
stack.push("mba");

console.log(stack.items);
console.log(stack.pop());
console.log(stack.items);

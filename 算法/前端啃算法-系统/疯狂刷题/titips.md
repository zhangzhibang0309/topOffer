# 前端章节

150题左右

## 数据结构层面

1. 链表

```js
// 遍历
while (head) {
    head = head.next
}
return head

// 虚拟头节点
let dummy = {
    next: head
}
```

2. 数组

```js
for (let i = 0; i < arr.length; i++) {
    arr[i]
}
```

3. 树 前端最需要刷的数据结构

```js
function walk(treeNode) {
    if(treeNode === null) return
    // 前序
    处理treeNode
    walk(treeNode.left)
    walk(treeNode.right)

    // 中序
    walk(treeNode.left)
    处理treeNode
    walk(treeNode.right)

    // 后序
    walk(treeNode.left)
    walk(treeNode.right)
    处理treeNode
}
```

## 算法层面

1. 二分

2. 双指针（快慢指针，头尾指针）
  1. 链表、数组

3. 递归和回溯（画递归树）
```js
function backtrack(数据,路径缓存) {
  循环：（每次取下一个值）
    标记
    backtrack(数据,路径缓存)
    取消标记
}
```
4. 动态规划
```js
想清楚递推公式
1，2，5 三种零钱 怎么最好的找出11块钱
dp[11]  11块钱这个值的找零最优解
Min(dp[10],dp[9],dp[6])的最优解
```
5. 贪心
```js
没有公式
一般就是暴力完后优化
```
6. bfs(宽度优先) dfs（回溯，深度优先）


## 题型

1. 盛水
2. 炒股
3. 打劫
# 扩展
1. 图
2. 哈希表
3. 。。。

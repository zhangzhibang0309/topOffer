// 为什么这道题明明用的是map，我却把他放到了链表里面呢？
// 其实使用map结合迭代器模拟了一下链表的效果

// 定义构造函数
var LRUCache = function (capacity) {
  this.cache = new Map();
  this.capacity = capacity;
};

// get
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    let tmp = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, tmp);

    return tmp;
  }
  return -1;
};

// put
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.cache.delete(key);
  } else if (this.cache.size >= this.capacity) {
    // 新增就要有缓存淘汰机制
    this.cache.delete(this.cache.keys().next().value);
  }
  this.cache.set(key, value);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

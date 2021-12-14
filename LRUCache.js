/*
Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

Implement the LRUCache class:

LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
int get(int key) Return the value of the key if the key exists, otherwise return -1.
void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
The functions get and put must each run in O(1) average time complexity.

two approaches: hash map + doubly linked list, or built-in Map object (similar to regular object but stores keys in order, has getter and setter functions)
*/

const LRUCache = function(capacity) {
  this.capacity = capacity;
  this.storage = new Map();
};

LRUCache.prototype.get = function(key) {
  if (!this.storage.has(key)) {
      return -1;
  }

  const value = this.storage.get(key);

  this.storage.delete(key);
  this.storage.set(key, value);

  return this.storage.get(key);
};

LRUCache.prototype.put = function(key, value) {
  if (this.storage.has(key)) {
      this.storage.delete(key);
  }

  this.storage.set(key, value);

  if (this.storage.size > this.capacity) {
      this.storage.delete(this.storage.keys().next().value);
  }
};
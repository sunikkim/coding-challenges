/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
*/

var MinStack = function() {
  this._storage = [];
  this._minStorage = [];
};

/**
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  this._storage.push(val);

  if (!this._minStorage.length || val < this._minStorage[this._minStorage.length - 1]) {
      this._minStorage.push(val);
  } else {
      this._minStorage.push(this._minStorage[this._minStorage.length - 1])
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  this._storage.pop();
  this._minStorage.pop();
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this._storage[this._storage.length - 1];
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this._minStorage[this._minStorage.length - 1];
};

/**
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/

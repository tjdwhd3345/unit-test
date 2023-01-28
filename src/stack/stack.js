class Stack {
  constructor() {
    this.data = [];
  }

  push(item) {
    this.data.push(item);
  }

  pop() {
    if (this.size() === 0) {
      throw new Error('stack is empty');
    }
    return this.data.pop();
  }

  peek() {
    if (this.size() === 0) {
      throw new Error('stack is empty');
    }
    return this.data[this.size() - 1];
  }

  getData() {
    return this.data;
  }

  size() {
    return this.data.length;
  }
}

module.exports = Stack;

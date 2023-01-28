class Stack {
  constructor() {
    this._size = 0;
    this.head = null;
  }

  push(item) {
    const node = { item, next: this.head };
    this.head = node;
    this._size++;
  }

  pop() {
    if (this.head === null) {
      throw new Error('stack is empty');
    }
    const node = this.head;
    this.head = node.next;
    this._size--;

    return node.item;
  }

  peek() {
    if (this.head === null) {
      throw new Error('stack is empty');
    }
    return this.head.item;
  }

  size() {
    return this._size;
  }
}

module.exports = Stack;

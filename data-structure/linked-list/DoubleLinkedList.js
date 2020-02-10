const DoubleNode = require("./DoubleNode");

class DoubleLinkedList {
  constructor() {
    this.count = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let node = new DoubleNode(val);

    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = this.tail.next;
    }
    return ++this.count;
  }

  pop() {
    if (!this.head) {
      return null;
    } else if (!this.head.next) {
      let curr = this.head;
      this.head = this.tail = null;
      this.count--;
      return curr;
    } else {
      let last = this.tail;
      this.tail = last.prev;
      this.tail.next = null;
      last.prev = null;
      this.count--;
      return last;
    }
  }

  unshift(val) {
    let node = new DoubleNode(val);

    if (this.head === null) {
      this.head = this.tail = node;
    } else {
      let curr = this.head;
      this.head = node;
      this.head.next = curr;
      curr.prev = this.head;
    }

    return ++this.count;
  }

  shift() {
    let curr = this.head;
    if (!this.head) {
      return null;
    } else if (!this.head.next) {
      this.head = this.tail = null;
      this.count--;
      return curr;
    } else {
      this.head = curr.next;
      this.head.prev = null;
      curr.next = null;
      this.count--;
      return curr;
    }
  }

  from(arr) {
    arr.forEach(val => {
      this.push(val);
    });
  }

  reverse() {
    let prev = null;
    let curr = this.head;
    let target = this.head;

    this.tail = curr;

    while (curr) {
      curr = curr.next;
      target.next = prev;
      target.prev = curr;
      prev = target;
      target = curr;
    }
    this.head = prev;
  }

  toArray() {
    let curr = this.head;
    const arr = [];
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    return arr;
  }

  toString(callback) {
    return this.toArray()
      .map(node => (callback ? callback(node) : node.toString()))
      .join();
  }

  insert(val, index) {
    if (index >= 0 && index <= this.count) {
      if (index === 0) {
        this.unshift(val);
      } else if (index === this.count) {
        this.push(val);
      } else {
        let node = new DoubleNode(val);
        let prev = this.getElementAt(index - 1);
        let curr = prev.next;

        prev.next = node;
        node.prev = prev;
        node.next = curr;
        curr.prev = node;

        this.count++;
      }
      return true;
    }
    return false;
  }

  indexOf(val) {
    let curr = this.head;
    for (let i = 0; i < this.count && curr !== null; i++, curr = curr.next) {
      if (curr.val === val) {
        return i;
      }
    }
    return -1;
  }

  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let curr = this.head;
      for (let i = 0; i < index && curr !== null; i++, curr = curr.next) {}
      return curr;
    }
    return null;
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let curr = this.head;
      if (index === 0) {
        return this.shift();
      } else if (index === this.count - 1) {
        return this.pop();
      } else {
        let prev = this.getElementAt(index - 1);
        curr = prev.next;
        prev.next = curr.next;
        prev.next.prev = prev;

        this.count--;
        return curr;
      }
    }
    return null;
  }

  remove(val) {
    let index = this.indexOf(val);
    return this.removeAt(index);
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.head === null;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }
}

module.exports = DoubleLinkedList;

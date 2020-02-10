const Node = require("./Node");

/**
 * 单向链表
 * 双向链表
 * * 循环链表 + 有序链表 (未学习)
 */
class LinkedList {
  constructor() {
    this.count = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let node = new Node(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    return ++this.count;
  }

  pop() {
    let curr = this.head;
    if (curr === null) {
      return null;
    } else if (curr.next === null) {
      this.head = null;
      this.tail = null;
      this.count--;
      return curr;
    } else {
      let prev;
      while (curr.next) {
        prev = curr;
        curr = curr.next;
      }
      prev.next = null;
      this.tail = prev;
      this.count--;
      return curr;
    }
  }

  unshift(val) {
    let node = new Node(val);
    let curr = this.head;

    if (curr === null) {
      this.head = this.tail = node;
    } else {
      node.next = curr;
      this.head = node;
    }

    return ++this.count;
  }

  shift() {
    let curr = this.head;
    if (curr === null) {
      return null;
    } else if (curr.next === null) {
      this.head = null;
      this.tail = null;
      this.count--;
    } else if (curr.next) {
      this.head = curr.next;
      this.count--;
    }
    return curr;
  }

  from(arr) {
    arr.forEach(val => {
      this.push(val);
    });
  }

  // 完全反转链表
  reverse() {
    let prev = null;
    let curr = this.head;
    let target = this.head;

    // 直接将尾部指向原头部
    this.tail = curr;

    while (curr) {
      curr = curr.next;
      target.next = prev;
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
        let node = new Node(val);
        let prev = this.getElementAt(index - 1);
        let curr = prev.next;
        node.next = curr;
        prev.next = node;
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

module.exports = LinkedList;

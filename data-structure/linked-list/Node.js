class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }

  toString() {
    return this.val.toString();
  }
}

module.exports = Node;

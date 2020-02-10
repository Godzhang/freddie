const Node = require("./Node");

class DoubleNode extends Node {
  constructor(val, next = null, prev = null) {
    super(val, next);
    this.prev = prev;
  }
}

module.exports = DoubleNode;

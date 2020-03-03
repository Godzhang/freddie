const { defaultToString } = require("./utils");
const ValuePair = require("./ValuePair");

class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  hashCode(key) {
    if (typeof key === "number") return key;
    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0, len = tableKey.length; i < len; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);
      this.table[position] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  remove(key) {
    const hash = this.hashCode(key);
    const valuePairs = this.table[hash];
    if (valuePairs) {
      delete this.table[hash];
      return true;
    }
    return false;
  }

  get(key) {
    const valuePairs = this.table[this.hashCode(key)];
    return valuePairs ? valuePairs.value : null;
  }

  keys() {
    return this.keyValues().map(item => item.key);
  }

  values() {
    return this.keyValues().map(item => item.value);
  }

  keyValues() {
    return Object.values(this.table);
  }

  toString() {
    const valuePairs = this.keyValues();
    if (!valuePairs.length) return "";
    let objstring = `${valuePairs[0].toString()}`;
    for (let i = 1, len = valuePairs.length; i < len; i++) {
      objstring = `${objstring},${valuePairs[i].toString()}`;
    }
    return objstring;
  }
}

module.exports = HashTable;

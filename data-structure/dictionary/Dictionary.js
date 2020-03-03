const { defaultToString } = require("./utils");
const ValuePair = require("./ValuePair");

class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  set(key, value) {
    if (key != null && value != null) {
      let tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }

  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }

  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  }

  get(key) {
    const valuePairs = this.table[this.toStrFn(key)];
    return valuePairs ? valuePairs.value : null;
  }

  clear() {
    this.table = {};
  }

  size() {
    return Object.keys(this.table).length;
  }

  isEmpty() {
    return this.size() === 0;
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

  forEach(callbackFn) {
    const valuePairs = this.keyValues();
    for (let i = 0, len = valuePairs.length; i < len; i++) {
      const result = callbackFn(valuePairs[i].key, valuePairs[i].value);
      if (result === false) {
        break;
      }
    }
  }

  toString() {
    if (this.isEmpty()) return "";
    const valuePairs = this.keyValues();
    let objstring = `${valuePairs[0].toString()}`;
    for (let i = 1, len = valuePairs.length; i < len; i++) {
      objstring = `${objstring},${valuePairs[i].toString()}`;
    }
    return objstring;
  }
}

module.exports = Dictionary;

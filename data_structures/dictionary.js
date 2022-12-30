const defaultToString = require("../util/util").defaultToString;

class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  }

  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);
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

  get(key) {
    const valuePair = this.table[this.toStrFn(key)];
    return valuePair == null ? undefined : valuePair.value;
  }

  keyValues() {
    return Object.values(this.table);
  }
  //   keyValues() {
  //     const valuePairs = [];
  //     for (const k in this.table) {
  //       // {1}
  //       if (this.hasKey(k)) {
  //         valuePairs.push(this.table[k]); // {2}
  //       }
  //     }
  //     return valuePairs;
  //   }

  keys() {
    return this.keyValues().map((valuePair) => valuePair.key);
  }

  values() {
    return this.keyValues().map((valuePair) => valuePair.value);
  }

  size() {
    return Object.keys(this.table).length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.table = {};
  }

  forEach(callbackFn) {
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      callbackFn(valuePairs[i].key, valuePairs[i].value);
    }
  }

  toString() {
    if (this.isEmpty()) {
      return "";
    }
    const valuePairs = this.keyValues();
    let objString = `${valuePairs[0].toString()}`;
    for (let i = 1; i < valuePairs.length; i++) {
      objString = `${objString},${valuePairs[i].toString()}`;
    }
    return objString;
  }
}

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}

module.exports = Dictionary;

const dictionary = new Dictionary();
dictionary.set("Gandalf", "gandalf@email.com");
dictionary.set("John", "johnsnow@email.com");
dictionary.set("Tyrion", "tyrion@email.com");
console.log(dictionary.table);
console.log(dictionary.hasKey("Gandalf"));

console.log(dictionary.size());
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get("Tyrion"));


dictionary.forEach((k, v) => {
  console.log(`key: ${k}, value: ${v}`);
});
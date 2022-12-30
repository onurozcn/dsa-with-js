class Set {
  constructor() {
    this.items = {};
  }
  add(element) {
    if (!this.hasElement(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }

  delete(element) {
    if (this.hasElement(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }
  size() {
    return Object.keys(this.items).length;
  }

  values() {
    return Object.values(this.items);
  }

  clear() {
    this.items = {};
  }

  hasElement(element) {
    //  return this.hasOwnProperty(element)
    return Object.prototype.hasOwnProperty.call(this.items, element);
  }

  union(otherSet) {
    const unionSet = new Set();
    this.values().forEach((elem) => unionSet.add(elem));
    otherSet.forEach((elem) => unionSet.add(elem));
    return unionSet;
  }

  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }
    let isSubset = true;
    this.values().forEach((elem) => {
      if (!otherSet.hasElement(elem)) {
        isSubset = false;
        return false;
      }
      return true;
    });
    return isSubset;
  }

  intersection(otherSet) {
    const interSet = new Set();
    let values = this.values();
    let otherValues = otherSet.values();
    let smaller = otherValues;
    let bigger = values;
    if (otherValues.length - values.length > 0) {
      smaller = values;
      bigger = otherValues;
    }
    smaller.forEach((elem) => {
      if (bigger.includes(elem)) {
        interSet.add(elem);
      }
    });
    return interSet;
  }

  difference(otherSet) {
    let differenceSet = new Set();
    this.values().forEach((elem) => {
      if (!otherSet.hasElement(elem)) {
        differenceSet.add(elem);
      }
    });
    return differenceSet;
  }
}

module.exports = Set;

const setA = new Set();
setA.add(1);
setA.add(2);
const setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);
const setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);
console.log(setA.isSubsetOf(setB));
console.log(setA.isSubsetOf(setC));

// const setA = new Set();
// setA.add(1);
// setA.add(2);
// setA.add(3);
// setA.add(5);
// setA.add(7);
// setA.add(22);
// setA.add(21);
// const setB = new Set();
// setB.add(52);
// setB.add(21);
// setB.add(22);
// setB.add(23);
// setB.add(2);
// setB.add(3);
// setB.add(4);
// const intersectionAB = setA.difference(setB);
// console.log(intersectionAB.values());

// const set = new Set();
// set.add(1);
// set.add(2);
// console.log(set.values());
// console.log(set.size());
// set.delete(1)
// console.log(set.values());
// console.log(set.hasElement(2));
// set.clear()
// console.log(set.values());

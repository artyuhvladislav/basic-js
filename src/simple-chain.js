const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(p) {
    if (p > 0) {
      this.arr.splice(p - 1, 1);
      return this;
    }
    this.arr = [];
    throw new Error('Invalid position');
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let res = this.arr.join('~~');
    this.arr = [];
    return res;
  }
};

module.exports = chainMaker;

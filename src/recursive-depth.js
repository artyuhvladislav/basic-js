const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;
    if (JSON.stringify(arr) === JSON.stringify(arr.flat(1)) ) {
      return counter;
    } else {
      return counter + this.calculateDepth(arr.flat(1));
    }
  }
}
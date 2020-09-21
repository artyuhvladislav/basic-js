const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  static count = 1;
  calculateDepth(arr) {
  
    return Array.isArray(arr) ? 1 + arr.reduce(function(a, b) {
  
      return Math.max(a, calculateDepth(b));
    }, 0) : 0;
  }
}
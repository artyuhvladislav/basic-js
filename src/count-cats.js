const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  throw new CustomError('Not implemented');
  if(arr === undefined || arr.length === 0) {
    return 0
  }
  else {
  let count = 0
  arr.flat().forEach(i => {
    i === '^^' ? count++ : null
  });
  return count
  }
  
};

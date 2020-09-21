const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(dN, tS) {
  return ({
    turns: 2**dN - 1,
    seconds: Math.floor((2**dN - 1) / (tS/3600))
  })
};

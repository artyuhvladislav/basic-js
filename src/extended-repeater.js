const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, o) {
const obj = Object.assign({repeatTimes: 0, separator: '+', addition: '', additionRepeatTimes: 0, additionSeparator: '|' }, o)

if(obj.repeatTimes === undefined) {
  obj.repeatTimes = 1
}
  if(obj.additionRepeatTimes === undefined) {
  obj.additionRepeatTimes = 1
}

const subRepeat = (s, n, add) => {
  let string = '';
  for(let i = 0; i < n; i++) {
    string += s + add
  }
  return string.slice(0, string.length - add.length)
}

  const newStr = str + subRepeat(obj.addition, obj.additionRepeatTimes, obj.additionSeparator);
  
  return subRepeat(newStr, obj.repeatTimes, obj.separator);
};
  
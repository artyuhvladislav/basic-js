const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  throw new CustomError('Not implemented');
  const  addStr = (str + options.addition + options.additionSeparator).repeat(options.additionRepeatTimes).split(options.additionSeparator).splice(0, options.additionRepeatTimes).join(options.additionSeparator);

  const res = (addStr + options.separator).repeat(options.repeatTimes).split(options.separator).splice(0, options.repeatTimes).join(options.separator)
  return res
};
  
const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!'
  }
  if (Object.prototype.toString.call(date) !== "[object Date]") {
    throw new Error()
  }
  const month = date.getMonth();
   
  if (month == 11 || month <= 1) {
    return 'winter'
  }
  else if (month >= 2 && month <= 4) {
    return 'spring'
  }
  else if (month >= 5 && month <= 7) {
    return 'summer'
  }
  else {
    return 'fall'
  }
};

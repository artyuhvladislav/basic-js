const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sample) {
  throw new CustomError('Not implemented');
  if (typeof sample !== "string" || 
  /[A-Za-z]/.test(sample) || 
  sample <= 0 || sample > MODERN_ACTIVITY) 
  return false;

  let rate = Math.LN2.toFixed(3) / HALF_LIFE_PERIOD;
  let years = Math.log(MODERN_ACTIVITY / parseFloat(sample)) / rate;
  return Math.ceil(years);
};

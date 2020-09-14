const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  throw new CustomError('Not implemented');
  if(arr === undefined || arr.length === 0) {
    return false
  }
  else {
    return arr.map( i => {
      if( (typeof i === 'string') && isNaN(+i) ) {
        console.log(+i)
        return i.toLocaleUpperCase().trim()[0]
      }
    }).sort().join('')
  }
};

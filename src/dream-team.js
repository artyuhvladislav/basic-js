const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if(!Array.isArray(arr) || arr.length <= 1) {
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

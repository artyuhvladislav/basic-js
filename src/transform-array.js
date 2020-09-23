const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(Array.isArray(!arr)) {
    throw new Error()
  }
  else {
    let myarr = [...arr]
    arr.forEach((el, i) => {
      if(el === '--discard-next') {
        if(i === myarr.length - 1) {
          myarr.splice(i, 1)
        } else {
          myarr.splice(i, 2)
        }
      } 
      else if(el === '--discard-prev') {
        if(i === 0) {
          myarr.splice(i, 1)
        } else {
          myarr.reverse()
          let index = myarr.indexOf('--discard-prev')
          myarr.splice(index, 2)
          myarr.reverse()
        }
      }
      else if(el === '--double-next') {
        if(i === myarr.length - 1) {
          myarr.splice(i, 1)
        } else {
          myarr.splice(i+1,0,myarr[i+1])
          myarr.splice(i, 1)
        }
      }
      else if(el === '--double-prev') {
        if(i === 0) {
           myarr.splice(i, 1)
        } else {
          myarr.splice(i+1,0,myarr[i-1])
          myarr.splice(i, 1)
        }
      }
  })
  return myarr
  }
};

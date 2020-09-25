const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(arg) {
    this.arg = arg
    this.alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', '!', '?', '@', '#', '(', ')', ',', '.', '/', '|', '*', '$', '-', '+', '=', ':', ';', '&', '^', '%' ,'1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  }
  encrypt(str, word) {
    if(str === null || str === undefined || word === null || word === undefined) {
      throw new Error()
    } else {
      const resultStr = []
      const resultNum = []

      let arr = [...str.toLowerCase()]
      const arrNum1 = []
      
      arr.forEach( el => {
        this.alph.forEach( (l,i) => {
          if(el === l && i <= 25) {
            arrNum1.push(i)
          } else if(el === l && i > 25) {
            arrNum1.push(el)
          }
        })
      })
    //   console.log('arrnum1',arrNum1)

      const arrNum2 = []
      
      let arrWord = [...word.toLowerCase().repeat(Math.ceil(str.replace(/[^A-Za-z]/g, '').length/word.length))]
      str.replace(/[^A-Za-z]/g, '').length < arrWord.length ? (arrWord = arrWord.slice(0, str.replace(/[^A-Za-z]/g, '').length)) : arrWord
    
    //   console.log('arrWord', arrWord)
      arrWord.forEach( el => {
        this.alph.forEach( (l,i) => {
          if(el === l) {
            arrNum2.push(i)
          }
        })
      })
    //   console.log('arn2', arrNum2)


    let j = 0;
    for(let i = 0; i < arrNum1.length; i++) {
      if(arrNum1[i] + arrNum2[j] > 25 && typeof arrNum1[i] !== 'string') {
      
        resultNum[i] = arrNum1[i] + arrNum2[j] - 26
        j++
      } else if(arrNum1[i] + arrNum2[j] < 25 && typeof arrNum1[i] !== 'string'){
        
        resultNum[i] = arrNum1[i] + arrNum2[j]
        j++
      } else {
        resultNum[i] = arrNum1[i]
      }
    }
    //   console.log('resultnum', resultNum)


      resultNum.forEach( n => {
      
          if(typeof n === 'string') {
            resultStr.push(n)
          } else {
            this.alph.forEach( (l,i) => {
                if(n === i && typeof n === 'number') {
                  resultStr.push(l)
                }
            })
          }
      })
      console.log('resultStr', resultStr)

    
      return resultStr.join('').toUpperCase()
    }
  }
        
  decrypt(str, word) {
    if(str === null || str === undefined || word === null || word === undefined) {
      throw new Error()
    }
    else {
      const resultStr = []
      const resultNum = []

      let arr = [...str.toLowerCase()]
      const arrNum1 = []
      
      arr.forEach( el => {
        this.alph.forEach( (l,i) => {
          if(el === l && i <= 25) {
            arrNum1.push(i)
          } else if(el === l && i > 25) {
            arrNum1.push(el)
          }
        })
      })
      console.log('arrnum1',arrNum1)

      const arrNum2 = []
      
      let arrWord = [...word.toLowerCase().repeat(Math.ceil(str.replace(/[^A-Za-z]/g, '').length/word.length))]
      str.replace(/[^A-Za-z]/g, '').length < arrWord.length ? (arrWord = arrWord.slice(0, str.replace(/[^A-Za-z]/g, '').length)) : arrWord
    
      console.log('arrWord', arrWord)
      arrWord.forEach( el => {
        this.alph.forEach( (l,i) => {
          if(el === l) {
            arrNum2.push(i)
          }
        })
      })

      console.log('arn2', arrNum2)

    
      let j = 0;
      for(let i = 0; i < arrNum1.length; i++) {
        if((arrNum1[i] - arrNum2[j] < 0 || arrNum1[i] - arrNum2[j] > 25) && typeof arrNum1[i] !== 'string') {
          resultNum[i] = arrNum1[i] + 26 - arrNum2[j] 
          j++
        } else if((arrNum1[i] - arrNum2[j] < 25  && arrNum1[i] + arrNum2[j] >= 0) && typeof arrNum1[i] !== 'string'){
          resultNum[i] = arrNum1[i] - arrNum2[j]
          j++
        } else {
          resultNum[i] = arrNum1[i]
        }
      }
    //   console.log('resultnum', resultNum)


      resultNum.forEach( n => {
      
          if(typeof n === 'string') {
            resultStr.push(n)
          } else {
            this.alph.forEach( (l,i) => {
                if(n === i && typeof n === 'number') {
                  resultStr.push(l)
                }
            })
          }
      })
      // console.log('resultStr', resultStr)



      if(this.arg !== false || this.arg === undefined) {
        return resultStr.join('').toLocaleUpperCase()
      } else {
        return resultStr.reverse().join('').toLocaleUpperCase()
      }
    }
  }
    
}

module.exports = VigenereCipheringMachine;

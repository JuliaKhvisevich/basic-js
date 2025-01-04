const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // const digits = Array.from(String(n), Number);
  // const a = Math.min(digits);
  // const filteredDigits = digits.filter(digit => digit !== a);
  // const number = Number(filteredDigits.join(''));
  // return number;


    const digits = String(n).split('').map(Number); 
    let maxNumber = 0; 
  
    for (let i = 0; i < digits.length; i++) {
      const newDigits = digits.slice(0, i).concat(digits.slice(i + 1));
      
      const newNumber = Number(newDigits.join(''));
      if (newNumber > maxNumber) {
        maxNumber = newNumber;
      }
    }
  
    return maxNumber;
  }
  

module.exports = {
  deleteDigit
};

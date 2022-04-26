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
  let a = 0;
  let number = String(n).split('');
  for(let i = 0; i<number.length;i++){
    number.splice(i,1);
    if(Number(number.join(''))>a){
      a = Number(number.join(''));
    }
    number = String(n).split('');
  }
  return a;
}

module.exports = {
  deleteDigit
};

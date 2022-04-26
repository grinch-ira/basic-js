const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let count = {}
  for(let i of domains){
    let arr = i.split('.').reverse()
    for(let j = 0; j<arr.length; j++){
      let s = '.' + arr.slice(0, j + 1).join('.')
      if(count[s])
        count[s]++
      else
        count[s] = 1
      
    }
  }
return count
}

module.exports = {
  getDNSStats
};

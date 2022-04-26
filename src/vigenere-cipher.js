const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isStraight = true) {
    this.type = isStraight;
    this.script = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  encrypt(...args) {
    if (
      args.length !== 2 ||
      typeof args[0] !== "string" ||
      typeof args[1] !== "string"
    ) {
      throw new Error("Incorrect arguments!");
    }
    let originalStr = args[0].toUpperCase();
    let key = args[1].toUpperCase();
    let result = "";
    let newKey = key.padEnd(originalStr.length, key);
    let j = 0;
    for (let i = 0; i < originalStr.length; i++) {
      if (this.script.includes(originalStr[i])) {
        let localScript =
          this.script.slice(this.script.indexOf(newKey[j])) + this.script;
        result += localScript[this.script.indexOf(originalStr[i])];
      } else {
        result += originalStr[i];
        j--;
      }
      j++;
    }
    return this.type ? result : result.split("").reverse().join("");
  }
  decrypt(...args) {
    if (
      args.length !== 2 ||
      typeof args[0] !== "string" ||
      typeof args[1] !== "string"
    ) {
      throw new Error("Incorrect arguments!");
    }
    let originalStr = args[0].toUpperCase();
    let key = args[1].toUpperCase();
    let result = "";
    let newKey = key.padEnd(originalStr.length, key);
    let j = 0;
    for (let i = 0; i < originalStr.length; i++) {
      if (this.script.includes(originalStr[i])) {
        let localScript =
          this.script.slice(this.script.indexOf(newKey[j])) + this.script;
        result += this.script[localScript.indexOf(originalStr[i])];
      } else {
        result += originalStr[i];
        j--;
      }
      j++;
    }
    return this.type ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};

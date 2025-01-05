const { NotImplementedError } = require('../extensions/index.js');

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
  constructor(isDirect = true) {
    this.isDirect = isDirect; 
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

   
    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = []; 
    let keyIndex = 0; 

    for (let i = 0; i < message.length; i++) {
      let char = message[i];

      if (char < 'A' || char > 'Z') {
        result.push(char);
        continue;
      }

      let letterCode = (char.charCodeAt(0) - 65 + (key[keyIndex % key.length].charCodeAt(0) - 65)) % 26;
      result.push(String.fromCharCode(65 + letterCode));

      keyIndex++; 
    }

    if (!this.isDirect) result.reverse();

    return result.join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = []; 
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      let char = message[i];

      if (char < 'A' || char > 'Z') {
        result.push(char);
        continue;
      }

      let letterCode = (char.charCodeAt(0) - 65 - (key[keyIndex % key.length].charCodeAt(0) - 65) + 26) % 26;
      result.push(String.fromCharCode(65 + letterCode));

      keyIndex++; 
    }

    if (!this.isDirect) result.reverse();

    return result.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};

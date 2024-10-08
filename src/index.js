/* module.exports =  */
function toReadable (number) {
  const converter = require('number-to-words')
  return converter.toWords(number)
}


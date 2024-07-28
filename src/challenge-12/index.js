function checkIsValidCopy(original, copy) {
  const decayChars = ["#", "+", ":", ".", " "]

  let i = 0
  for (const char of original) {
    if (
      decayChars.includes(char) &&
      decayChars.indexOf(char) > decayChars.indexOf(copy[i])
    ) return false
    
    if (
      char !== copy[i] &&
      char.toLowerCase() !== copy[i] &&
      !decayChars.includes(copy[i])
    ) return false

    i++
  }

  return true
}

console.log(checkIsValidCopy(
  'Santa Claus is coming',
  'sa#ta Cl#us i+ comin#'
)) // true
console.log(checkIsValidCopy(
  's#nta Cla#s is coming',
  'p#nt: cla#s #s c+min#'
)) // false (por la p inicial))
console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s')) // true
console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')) // false (hay un # donde no debería)

module.exports = checkIsValidCopy


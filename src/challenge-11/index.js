function getIndexsForPalindrome(word) {
  const isPalindrome = (arr) => {
    return [...arr].reverse().every(
      (char, index) => char === arr[index]
    )
  }

  if (isPalindrome(word)) return []

  let i = 0
  for (const char1 of word) {
    let j = i + 1
    for (const char2 of word.slice(j)) {
      const swapped = word.split('')

      swapped[i] = char2
      swapped[j] = char1

      if (isPalindrome(swapped)) return [i, j]
      j++
    }

    i++
  }

  return null
}

module.exports = getIndexsForPalindrome

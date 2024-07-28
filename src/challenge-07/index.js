function drawGift(size, symbol) {
  let finalDraw = ''

  for (let i = 1; i <= size; i++) {
    finalDraw += ' '.repeat(size - i)

    if (i === 1) {
      finalDraw += '#'.repeat(size)
    } else if (i === size) {
      finalDraw += '#'.repeat(size) + symbol.repeat(size - 2) + '#'
    } else {
      finalDraw +=
        '#' + symbol.repeat(size - 2)
        + '#' + symbol.repeat(i - 2) + '#'
    }

    finalDraw += '\n'
  }

  for (let i = size - 1; i >= 1; i--) {
    if (i === 1) {
      finalDraw += '#'.repeat(size)
    } else {
      finalDraw +=
        '#' + symbol.repeat(size - 2)
        + '#' + symbol.repeat(i - 2) + '#'
    }

    finalDraw += '\n'
  }

  return finalDraw
}

module.exports = drawGift

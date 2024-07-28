// ! ESTUDIAR Y VER SI LO PUEDO HACER MEJOR
function createChristmasTree(ornaments, height) {
  const overflow = ornaments.length
  let tree = ''

  let pointer = 0
  let i = 1

  for (const _ of ' '.repeat(height)) {
    let row = ' '.repeat(height - i)

    for (const _ of ' '.repeat(i)) {
      row += ornaments[pointer++ % overflow] + ' '
    }

    tree += row.trimEnd() + '\n'
    i++
  }

  return tree += ' '.repeat(height - 1) + '|\n'
}

module.exports = createChristmasTree

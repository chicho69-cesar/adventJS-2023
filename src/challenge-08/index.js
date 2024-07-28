function organizeGifts(gifts = '') {
  const countGifts = gifts.match(/\d+/g)
  const nameGifts = gifts.match(/[^0-9]/g)

  return countGifts.reduce((acc, el, i) => {
    const key = nameGifts[i]
    let element = Number(el)

    const pales = element >= 50
      ? `[${key}]`.repeat(Math.floor(element / 50))
      : ''
    element %= 50

    const boxes = element >= 10
      ? `{${key}}`.repeat(Math.floor(element / 10))
      : ''
    element %= 10

    const packages = element > 0 ?
      '(' + `${key}`.repeat(element) + ')'
      : ''

    return acc + pales + boxes + packages
  }, '')
}

module.exports = organizeGifts

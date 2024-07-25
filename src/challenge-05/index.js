function cyberReindeer(road = '', time) {
  let position = 0
  let roadArray = road.replaceAll('S', '.').split('')

  const result = new Array(time).fill('')

  return result.map((_, i) => {
    let newRoad = [...roadArray]
    let nextChar = roadArray[position + 1]

    if (i >= 5) {
      newRoad = roadArray.map((x) => x.replace('|', '*'))
      position++
      newRoad[position] = 'S'

      return newRoad.join('')
    }

    newRoad[position] = 'S'

    if (nextChar !== '|') {
      position++
    }

    return newRoad.join('')
  })
}

module.exports = cyberReindeer

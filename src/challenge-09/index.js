// ! ESTUDIAR Y VER SI LO PUEDO HACER MEJOR
function adjustLights(lights) {
  let totalChangesForGreen = 0
  let totalChangesForRed = 0

  const parityRules = {
    0: {
      '🔴': [1, 0],
      '🟢': [0, 1],
    },
    1: {
      '🔴': [0, 1],
      '🟢': [1, 0],
    }
  }

  let parity = 0

  for (const light of lights) {
    const [
      changesForRed,
      changesForGreen
    ] = parityRules[parity][light]

    totalChangesForGreen += changesForGreen
    totalChangesForRed += changesForRed

    parity = 1 - parity
  }

  return Math.min(totalChangesForRed, totalChangesForGreen)
}

module.exports = adjustLights

function manufacture(gifts, materials) {
  return gifts
    .map(
      (gift) => [...gift].every(
        (character) => materials.includes(character)
      ) ? gift : null
    )
    .filter(Boolean)
}

module.exports = manufacture

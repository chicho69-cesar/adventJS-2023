function findNaughtyStep(original, modified) {
  const [toUse, notUse] = original.length > modified.length
    ? [original, modified]
    : [modified, original]

  const found = [...toUse].find(
    (el, i) => el !== notUse[i]
  )

  return found ?? ''
}

module.exports = findNaughtyStep

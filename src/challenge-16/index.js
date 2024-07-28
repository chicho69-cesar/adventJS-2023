function transformTree(tree) {
  const getObjectTree = (index = 0) => {
    const value = tree[index]

    if (value == null) return null
    return {
      value,
      left: getObjectTree(2 * index + 1),
      right: getObjectTree(2 * index + 2)
    }
  }

  const result = getObjectTree()
  return result
}

module.exports = transformTree

function maxDistance(movements) {
  const dic = { '<': 0, '*': 0, '>': 0 }
  
  for (const movement of movements) {
    dic[movement]++
  }
  
  return Math.abs(dic['<'] - dic['>']) + dic['*']
}

module.exports = maxDistance

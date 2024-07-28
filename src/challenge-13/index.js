function calculateTime(deliveries) {
  const max = 3600 * 7
  let time = 0

  for (const delivery of deliveries) {
    const [hours, minutes, seconds] = delivery.split(':')
    time += (+hours * 3600) + (+minutes * 60) + +seconds
  }

  const isPositive = (time >= max)
  const sign = isPositive ? '' : '-'
  const difference = Math.abs(time - max)

  const resultHours = Math.floor(difference / 3600)
  const resultMinutes = Math.floor((difference % 3600) / 60)
  const resultSeconds = (difference % 3600) % 60
  
  const result = `${sign}`
    + `${resultHours.toString().padStart(2, '0')}:`
    + `${resultMinutes.toString().padStart(2, '0')}:`
    + `${resultSeconds.toString().padStart(2, '0')}`
  
  return result
}

module.exports = calculateTime

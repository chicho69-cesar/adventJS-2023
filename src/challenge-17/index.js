// ! ESTUDIAR Y VER SI LO PUEDO HACER MEJOR
function optimizeIntervals(intervals) {
  intervals.sort((a, b) => a[0] - b[0])

  const mergedIntervals = [intervals[0]]

  for (const currentInterval of intervals) {
    const lastMergedInterval = mergedIntervals.at(-1)

    if (currentInterval[0] <= lastMergedInterval[1]) {
      lastMergedInterval[1] = Math.max(
        lastMergedInterval[1], currentInterval[1]
      )
    } else {
      mergedIntervals.push(currentInterval)
    }
  }

  return mergedIntervals
}

module.exports = optimizeIntervals

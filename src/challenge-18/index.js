function drawClock(time) {
  const digitPatterns = {
    '0': [
      ["*", "*", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", "*", "*"]
    ],
    '1': [
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"]
    ],
    '2': [
      ["*", "*", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      ["*", "*", "*"],
      ["*", " ", " "],
      ["*", " ", " "],
      ["*", "*", "*"]
    ],
    '3': [
      ["*", "*", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      ["*", "*", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      ["*", "*", "*"]
    ],
    '4': [
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", "*", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"]
    ],
    '5': [
      ["*", "*", "*"],
      ["*", " ", " "],
      ["*", " ", " "],
      ["*", "*", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      ["*", "*", "*"]
    ],
    '6': [
      ["*", "*", "*"],
      ["*", " ", " "],
      ["*", " ", " "],
      ["*", "*", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", "*", "*"]
    ],
    '7': [
      ["*", "*", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"]
    ],
    '8': [
      ["*", "*", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", "*", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", "*", "*"]
    ],
    '9': [
      ["*", "*", "*"],
      ["*", " ", "*"],
      ["*", " ", "*"],
      ["*", "*", "*"],
      [" ", " ", "*"],
      [" ", " ", "*"],
      ["*", "*", "*"]
    ],
    ':': [
      [" "],
      [" "],
      ["*"],
      [" "],
      ["*"],
      [" "],
      [" "]
    ],
  }

  const numberOfDigits = time.length - 1
  const clockOutput = [
    [], [], [], [], [], [], []
  ]

  let digitIndex = 0
  for (const digit of time) {
    const digitPattern = digitPatterns[digit]

    let rowIndex = 0
    for (const rowData of digitPattern) {
      const spaceOptions = [
        rowData, [...rowData, ' ']
      ]

      clockOutput[rowIndex++].push(
        ...spaceOptions[+(digitIndex < numberOfDigits)]
      )
    }

    digitIndex++
  }

  return clockOutput
}

module.exports = drawClock

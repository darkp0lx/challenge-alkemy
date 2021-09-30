export function shuffle (array) {
  var currentIndex = array.length,
    randomIndex
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ]
  }

  return array
}

export const generateNumbers = (numberMin, numberMax) => {
  let array = []
  for (let i = 0; i < numberMax - numberMin; i++) {
    array.push(numberMin + i)
  }
  return array
}

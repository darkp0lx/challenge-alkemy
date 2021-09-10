export function shuffle (array) {
  var currentIndex = array.length,
    randomIndex
  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
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

export const getRandomFirstPlace = bounds =>
  bounds.map(num => Math.floor(Math.random(1) * 10 + num))

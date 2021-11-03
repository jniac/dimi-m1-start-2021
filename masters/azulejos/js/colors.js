import { Random } from './utils/random.js'

const random = new Random()

export const getRandomColor = () => {
  const r = random.random()
  if (r < 0.5) {
    if (random.random() < 0.5) {
      return '#b92e15'
    }
    return 'tomato'
  }
  if (r < 0.7) {
    return '#df5eef'
  }
  if (r < 0.9) {
    return '#06069f'
  }
  return '#5bacff'
}

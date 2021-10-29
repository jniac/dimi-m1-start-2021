import { Random } from './utils/random.js'
import { UniqueArrayGenerator } from './utils/UniqueArrayGenerator.js'

const random = new Random()

const getRandomColor = () => {
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

const generator = new UniqueArrayGenerator()

export const create = () => {
  const source = document.querySelector('#library .type1')
  const clone = source.cloneNode(true)
  const [key, [color1, color2, color3, color4]] = generator.getUniqueKeyAndArray(() => [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()])
  clone.dataset.tileKey = key
  clone.style.backgroundColor = color1
  clone.querySelector('.layer1').style.backgroundColor = color2
  clone.querySelector('.layer2').style.backgroundColor = color3
  clone.querySelector('.layer3').style.backgroundColor = color4
  return clone
}

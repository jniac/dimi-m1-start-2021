import { getRandomColor } from './colors.js'
import { UniqueArrayGenerator } from './utils/UniqueArrayGenerator.js'

const generator = new UniqueArrayGenerator()

const source = document.querySelector('#library .type2')

export const createType2 = () => {
  const clone = source.cloneNode(true)
  const [key, [color1, color2, color3, color4]] = generator.getUniqueKeyAndArray(() => [getRandomColor(), getRandomColor(), getRandomColor(), getRandomColor()])
  clone.dataset.tileKey = key
  clone.style.backgroundColor = color1

  for (const element of clone.querySelectorAll('.corner')) {
    element.style.color = color2
  }

  for (const element of clone.querySelectorAll('.middle')) {
    element.style.color = color3
    element.style.backgroundColor = color4
  }

  return clone
}

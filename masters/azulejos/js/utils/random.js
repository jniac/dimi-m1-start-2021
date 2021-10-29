const next = (value) => value * 16807 % 2147483647

const init = (value) => {
  value = Math.floor(value || 123456789)
  value %= 2147483647
  value += value < 0 ? 2147483647 : 0
  return next(value)
}

const toRange01 = value => (value - 1) / 2147483646

let current = init()

/**
 * A integer between 0 and 2147483647.
 * @param {number} value 
 */
export const seed = (value) => {
  current = init(value)
}

export const random = () => {
  current = next(current)
  return toRange01(current)
}

export class Random {
  #current = init()
 
  seed(value) {
    this.#current = init(value)
    return this
  }

  random() {
    this.#current = next(this.#current)
    return toRange01(this.#current)
  }

  chance(p) {
    return this.random() < p
  }

  float({ min = 0, max = 1 }) {
    return min + (max - min) * this.random()
  }

  integer({ min = 0, max = 100 }) {
    return Math.floor(min + (max - min) * this.random())
  }

  /**
   * Returns a zero-based index (an integer between 0 inclusive and "length" exclusive)..
   * @param {number} length
   */
  index(length) {
    return Math.floor(length * this.random())
  }

  item(array) {
    return array[this.integer({ max: array.length })]
  }

  uniqueItems(array, count) {
    if (count > array.length) {
      count = array.length
    }
    const array2 = [...array]
    const items = []
    while (items.length < count) {
      const index = this.index(array2.length)
      const [item] = array2.splice(index, 1)
      items.push(item)
    }
    return items
  }
}
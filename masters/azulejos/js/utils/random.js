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
 
  static seed(value) {
    current = init(value)
    return Random
  }
  
  seed(value) {
    this.#current = init(value)
    return this
  }

  static random() {
    current = next(current)
    return toRange01(current)
  }
  
  random() {
    this.#current = next(this.#current)
    return toRange01(this.#current)
  }

  /** @param {number} p */
  static chance(p) {
    return Random.random() < p
  }
  
  /** @param {number} p */
  chance(p) {
    return this.random() < p
  }

  /** @param {{ min?:number, max?:number }} param0 */
  static float({ min = 0, max = 1 }) {
    return min + (max - min) * Random.random()
  }
  
  /** @param {{ min?:number, max?:number }} param0 */
  float({ min = 0, max = 1 }) {
    return min + (max - min) * this.random()
  }

  /**
   * Returns an integer between "min" inclusive and "max" exclusive
   * @param {{ min?:number, max?:number }} param0 
   */
  static integer({ min = 0, max = 100 }) {
    return Math.floor(min + (max - min) * Random.random())
  }

  integer({ min = 0, max = 100 }) {
    return Math.floor(min + (max - min) * this.random())
  }

  /**
   * Returns a zero-based index (an integer between 0 inclusive and "length" exclusive).
   * @param {number} length
   */
  static index(length) {
    return Math.floor(length * Random.random())
  }
  
  /**
   * Returns a zero-based index (an integer between 0 inclusive and "length" exclusive).
   * @param {number} length
   */
  index(length) {
    return Math.floor(length * this.random())
  }

  /**
   * Returns a random item from an array.
   * @param {any[]} array 
   */
  static item(array) {
    return array[Random.index(array.length)]
  }

  /**
   * Returns a random item from an array.
   * @param {any[]} array 
   */
  item(array) {
    return array[this.index(array.length)]
  }

  /**
   * Returns an array of items randomly picked from the given array. There will be no duplicates.
   * 
   * Note: `count` will be clamped to (0, array.length), so the returned array could not hold more than `array.length` items.
   * @param {any[]} array 
   * @param {number} count 
   */
  static uniqueItems(array, count) {
    if (count > array.length) {
      count = array.length
    }
    const array2 = [...array]
    const items = []
    while (items.length < count) {
      const index = Random.index(array2.length)
      const [item] = array2.splice(index, 1)
      items.push(item)
    }
    return items
  }

  /**
   * Returns an array of items randomly picked from the given array. There will be no duplicates.
   * 
   * Note: `count` will be clamped to (0, array.length), so the returned array could not hold more than `array.length` items.
   * @param {any[]} array 
   * @param {number} count 
   */
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
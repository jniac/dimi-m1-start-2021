import { getPixel, setPixel } from './utils/canvas.js'

const RIGHT = 0
const BOTTOM = 1
const LEFT = 2
const UP = 3

let x = 20
let y = 20
let orientation = RIGHT

setPixel(x, y, '#fc0')

const moveForward = () => {
  if (orientation === RIGHT) {
    x = x + 1
  } else if (orientation === BOTTOM) {
    y = y + 1
  } else if (orientation === LEFT) {
    x = x - 1
  } else if (orientation === UP) {
    y = y - 1
  }
}

const turnRight = () => {
  orientation = orientation + 1
  if (orientation === 4) {
    orientation = 0
  }
}

const turnLeft = () => {
  orientation = orientation - 1
  if (orientation === -1) {
    orientation = 3
  }
}

const move = () => {
  
  const color = getPixel(x, y)

  if (color === '#ffffff') {
    turnLeft()    
    setPixel(x, y, 'turquoise')
  } else {
    turnRight()
    setPixel(x, y, '#ffffff')
  }
  
  moveForward()
}

export {
  x,
  y,
  orientation,
  move,
}


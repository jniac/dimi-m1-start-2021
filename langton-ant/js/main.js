import { resizeCanvas } from './utils/canvas.js'
import * as ant from './ant.js'

resizeCanvas(64, 64)

let paused = true

const loop = () => {
  requestAnimationFrame(loop)
  if (paused === false) {
    ant.move()
  }
}

loop()

// UI: 

document.querySelector('button#move').onclick = () => {
  ant.move()
}

document.querySelector('button#play-pause').onclick = () => {
  paused = !paused
}

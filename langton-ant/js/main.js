import { resizeCanvas } from './utils/canvas.js'
import * as ant from './ant.js'

resizeCanvas(32, 32)

document.querySelector('button#move').onclick = () => {
  ant.move()
}

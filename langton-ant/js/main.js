import { setPixel } from './utils/canvas.js'
// import './ant.js'

const width = 32
const height = 32

const canvas = document.querySelector('canvas')
canvas.width = width
canvas.height = height

setPixel(10, 10, 'red')
import('./ant.js')

import { createType1 } from './type1.js'
import { createType2 } from './type2.js'
import { Random } from './utils/random.js'
import { wait } from './utils/wait.js'
import './cheat.js'

const random = new Random()

const createTile = () => {
  const tile = document.createElement('div')
  tile.className = 'tile'
  document.querySelector('main').append(tile)

  if (random.chance(0.5)) {
    tile.append(createType1())
  } else {
    tile.append(createType2())
  }

  tile.onclick = () => {
    tile.classList.toggle('clicked')
  }

  return tile
}

const createGrid = (col, row) => {
  document.body.style.setProperty('--grid-col', col)
  document.body.style.setProperty('--grid-row', row)

  const tiles = []
  for (let y = 0; y < row; y += 1) {
    for (let x = 0; x < col; x += 1) {
      const tile = createTile()
      tile.style.left = `${x * 120}px`
      tile.style.top = `${y * 120}px`
      tiles.push(tile)
    }
  }
  return tiles
}

const cloneARandomTileContent = (tiles) => {
  const index1 = random.index(tiles.length)
  let index2 = random.index(tiles.length)
  while (index2 === index1) {
    index2 = random.index(tiles.length)
  }
  const tile1 = tiles[index1]
  const tile2 = tiles[index2]
  tile1.innerHTML = ''
  tile1.append(tile2.querySelector('div.tile-content').cloneNode(true))
  
  tile1.classList.add('duplicate')
  tile2.classList.add('duplicate')
}

const tilesAreIdentique = (tile1, tile2) => {
  const content1 = tile1.querySelector('div.tile-content')
  const content2 = tile2.querySelector('div.tile-content')
  return (
    content1.className === content2.className 
    && content1.dataset.tileKey === content2.dataset.tileKey 
  )
}

const suffleTiles = (tiles) => {
  for (const tile1 of tiles) {
    const tile2 = random.item(tiles)
    const { left, top } = tile2.style
    tile2.style.left = tile1.style.left
    tile2.style.top = tile1.style.top
    tile1.style.left = left
    tile1.style.top = top
  }
}

const gridOnClick = async (playableTiles) => {
  await wait(0.3)
  
  const tiles = grid.querySelectorAll('div.tile.clicked')
  if (tiles.length === 2) {
    const [tile1, tile2] = tiles
    if (tilesAreIdentique(tile1, tile2)) {
      playableTiles.splice(playableTiles.indexOf(tile1), 1)
      playableTiles.splice(playableTiles.indexOf(tile2), 1)
      tile1.classList.remove('clicked')
      tile2.classList.remove('clicked')
      tile1.classList.remove('duplicate')
      tile2.classList.remove('duplicate')
      tile1.classList.add('played')
      tile2.classList.add('played')

      await wait(0.3)
      if (playableTiles.length < 2) {
        win()
      } else {
        cloneARandomTileContent(playableTiles)
        // suffleTiles(random.uniqueItems(playableTiles, 10))
        suffleTiles(random.uniqueItems(playableTiles, 1000))
      }
    } else {
      await wait(1)
      tile1.classList.remove('clicked')
      tile2.classList.remove('clicked')
    }
  }
}


const win = async () => {
  await wait(1)
  alert('yeah!')
}

const main = async () => {

  // On attend ici le chargement des ressources par ./type2.js
  await wait(0.1)

  const tiles = createGrid(5, 4)
  
  const playableTiles = [...tiles]
  cloneARandomTileContent(playableTiles)
  
  const grid = document.querySelector('main#grid')
  grid.onclick = () => gridOnClick(playableTiles)
}

main()




window.addEventListener('keydown', event => {
  if (event.code === 'Space') {
    document.body.classList.toggle('cheat')
  }
})





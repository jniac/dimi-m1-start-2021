
const getRandomClassName = () => {
  const r = Math.random()
  
  // 20% de chance de retourner "silver"
  if (r < 0.2) {
    return 'silver'
  }

  // 10% (30 - 20) de chance de retourner "gold"
  if (r < 0.3) {
    return 'gold'
  } 
  
  // dans tous les autres cas renvoyer ""
  return 'normal'
}

const getRandomEmoji = () => {
  const r = Math.random()

  if (r < 0.5) {
    return '✨'
  }

  return '🎨'
}

const cloneThatDiv = (source) => {
  const clone = source.cloneNode(true)
  document.body.appendChild(clone)

  const x = Math.round(Math.random() * window.innerWidth)
  const y = Math.round(Math.random() * window.innerHeight)
  clone.style.left = x + 'px'
  clone.style.top = y + 'px'
  const angle = Math.round(Math.random() * 60 - 30)
  clone.style.transform = `rotate(${angle}deg)`

  const randomClass = getRandomClassName()
  clone.className = `card ${randomClass}`

  clone.querySelector('div').innerHTML = getRandomEmoji()
}

const cloneOnClick = (event) => {
  // console.log(event.currentTarget)
  const source = event.currentTarget
  cloneThatDiv(source)
}

const destroyCard = (event) => {
  const card = event.currentTarget.parentElement
  // console.log(card)
  card.remove()
  event.stopPropagation()
}

window.onkeydown = (event) => {
  // console.log(event.code)
  if (event.code === 'Space') {
    const source = document.querySelector('div.card')
    cloneThatDiv(source)
  }
}


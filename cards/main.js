const cloneOnClick = (event) => {
  // console.log(event.currentTarget)
  const source = event.currentTarget
  const clone = source.cloneNode(true)
  document.body.append(clone)

  const x = Math.round(Math.random() * window.innerWidth)
  clone.style.left = x + 'px'
  clone.style.top = '300px'
  const angle = Math.round(Math.random() * 60)
  clone.style.transform = `rotate(${angle}deg)`
}

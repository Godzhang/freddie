function random (min = 0, max = 1) {
  return ~~(Math.random() * (max - min + 1) + min)
}

function randomColor () {
  return `rgba(${ random(0, 255) }, ${ random(0, 255) }, ${ random(0, 255) }, ${ Math.random() })`
}

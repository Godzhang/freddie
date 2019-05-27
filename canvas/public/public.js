class Particle {
  constructor ({x, y, radius = 5, color = '#08c'}) {
    this.x = x
    this.y = y
    this.radius =  radius
    this.color = color
  }

  draw () {
    let { x, y, radius, color } = this
    ctx.beginPath()
    ctx.fillStyle = color
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.closePath()
    ctx.fill()
  }

  update () {}
}

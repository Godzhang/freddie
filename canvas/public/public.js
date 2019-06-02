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

function drawGrid (color, stepx, stepy) {
  ctx.strokeStyle = color
  ctx.lineWidth = 0.5

  for (let i = stepx + 0.5; i < ctx.canvas.width; i += stepx) {
    ctx.beginPath()
    ctx.moveTo(i, 0)
    ctx.lineTo(i, ctx.canvas.height)
    ctx.stroke()
  }
  for (let i = stepy + 0.5; i < ctx.canvas.height; i += stepy) {
    ctx.beginPath()
    ctx.moveTo(0, i)
    ctx.lineTo(ctx.canvas.width, i)
    ctx.stroke()
  }
}

function rect(x, y, w, h, direction) {
  if (direction) {
    ctx.moveTo(x, y)
    ctx.lineTo(x, y + h)
    ctx.lineTo(x + w, y + h)
    ctx.lineTo(x + w, y)
  } else {
    ctx.moveTo(x, y)
    ctx.lineTo(x + w, y)
    ctx.lineTo(x + w, y + h)
    ctx.lineTo(x, y + h)
  }
  ctx.closePath()
}

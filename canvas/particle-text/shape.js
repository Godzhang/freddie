class Shape {
  constructor (x, y, text) {
    this.x = x
    this.y = y
    this.text = text
    this.size = 200
    this.placement = []
  }

  getValue () {
    ctx.textAlign = 'center'
    ctx.font = `${ this.size }px arial`
    ctx.fillText(this.text, this.x, this.y)

    let imageData = ctx.getImageData(0, 0, cw, ch)
    let buffer32 = new Uint32Array(imageData.data.buffer)

    for (let j = 0; j < ch; j += gridY) {
      for (let i = 0; i < cw; i += gridX) {
        if (buffer32[j * cw + i]) {
          this.placement.push(new MyParticle({
            x: i,
            y: j,
            radius: random(4, 9),
            color: colors[random(0, colors.length - 1)]
          }))
        }
      }
    }

    ctx.clearRect(0, 0, cw, ch)
  }
}

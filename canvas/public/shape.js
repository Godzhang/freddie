class Ball {
  constructor(x = 0, y = 0, radius = 12, color = "#6699ff") {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.scaleX = 1;
    this.scaleY = 1;
  }

  stroke(context) {
    context.save();
    context.scale(this.scaleX, this.scaleY);
    context.strokeStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.closePath();
    context.stroke();
    context.restore();
  }

  fill(context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.scale(this.scaleX, this.scaleY);
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2);
    context.fill();
    context.restore();
  }

  getRect() {
    return {
      x: this.x - this.radius,
      y: this.y - this.radius,
      width: this.radius * 2,
      height: this.radius * 2,
    };
  }
}

class Box {
  constructor(x = 0, y = 0, width = 80, height = 40, color = "red") {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;

    this.vx = 0;
    this.vy = 0;
  }

  stroke(context) {
    context.save();
    context.strokeStyle = this.color;
    context.beginPath();
    context.rect(this.x, this.y, this.width, this.height);
    context.closePath();
    context.stroke();
    context.restore();
  }

  fill(context) {
    context.save();
    context.fillStyle = this.color;
    context.beginPath();
    context.rect(this.x, this.y, this.width, this.height);
    context.closePath();
    context.fill();
    context.restore();
  }
}

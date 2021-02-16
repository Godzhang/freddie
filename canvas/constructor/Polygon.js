class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

class Polygon {
  constructor(
    centerX,
    centerY,
    radius,
    sides,
    startAngle,
    strokeStyle,
    fillStyle
  ) {
    this.x = centerX;
    this.y = centerY;
    this.radius = radius;
    this.sides = sides;
    this.startAngle = startAngle || -Math.PI / 2;
    this.strokeStyle = strokeStyle || "rgba(0, 0, 0, 1)";
    this.fillStyle = fillStyle || "rgba(0, 0, 0, 1)";
  }

  getPoints() {
    const points = [];
    let angle = this.startAngle;
    const { x, y, radius, sides } = this;

    for (let i = 0; i < sides; i++) {
      points.push({
        x: x + Math.cos(angle) * radius,
        y: y + Math.sin(angle) * radius, // 如果是减号就是逆时针绘制
      });
      angle += (Math.PI * 2) / sides;
    }

    return points;
  }

  createPath(context) {
    const points = this.getPoints();
    context.beginPath();
    context.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < this.sides; i++) {
      context.lineTo(points[i].x, points[i].y);
    }
    context.closePath();
  }

  stroke(context) {
    context.save();
    this.createPath(context);
    context.strokeStyle = this.strokeStyle;
    context.stroke();
    context.restore();
  }

  fill(context) {
    context.save();
    this.createPath(context);
    context.fillStyle = this.fillStyle;
    context.fill();
    context.restore();
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }

  setSides(s) {
    this.sides = s;
  }

  setRadius(r) {
    this.radius = r;
  }

  updateConfig(config) {
    for (let attr in config) {
      if (this.hasOwnProperty(attr)) {
        this[attr] = config[attr];
      }
    }
  }
}

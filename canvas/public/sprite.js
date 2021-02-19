class Sprite {
  constructor(name, painter, behaviors) {
    if (name !== undefined) this.name = name;
    if (painter !== undefined) this.painter = painter;

    this.top = 0; // 左上角Y坐标
    this.left = 0; // 左上角X坐标
    this.width = 10;
    this.height = 10;
    this.velocityX = 0; // 水平速度
    this.velocityY = 0; // 垂直速度
    this.visible = true;
    this.animating = false;
    this.behaviors = behaviors || [];

    return this;
  }

  paint(context) {
    if (this.painter !== undefined && this.visible) {
      this.painter.paint(this, context);
    }
  }

  update(context, time) {
    for (let i = 0; i < this.behaviors.length; i++) {
      this.behaviors[i].execute(this, context, time);
    }
  }
}

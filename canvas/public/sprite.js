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

class ImagePainter {
  constructor(imageUrl) {
    this.image = new Image();
    this.image.src = imageUrl;
  }

  paint(sprite, context) {
    const { top, left, width, height } = sprite;
    if (this.image.complete) {
      context.drawImage(this.image, left, top, width, height);
    }
  }
}

class SpriteAnimator {
  constructor(painters, elapsedCallback) {
    this.painters = painters || [];
    this.elapsedCallback = elapsedCallback;
    this.duration = 1000;
    this.startTime = 0;
    this.index = 0;
  }

  end(sprite, originalPainter) {
    sprite.animating = false;
    if (this.elapsedCallback) {
      this.elapsedCallback(sprite);
    } else {
      sprite.painter = originalPainter;
    }
  }

  start(sprite, duration) {
    const endTime = Date.now() + duration;
    const period = duration / this.painters.length;
    const animator = this;
    const originalPainter = sprite.painter;
    const lastUpdate = 0;

    this.index = 0;
    sprite.animating = true;
    sprite.painter = this.painters[this.index];

    function spriteAnimatorAnimate(time) {
      if (time < endTime) {
        if (time - lastUpdate > period) {
          sprite.painter = animator.painters[++animator.index];
          lastUpdate = time;
        }
        requestAnimationFrame(spriteAnimatorAnimate);
      } else {
        animator.end(sprite, originalPainter);
      }
    }
    spriteAnimatorAnimate(Date.now());
  }
}

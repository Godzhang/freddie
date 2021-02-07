function random(min = 0, max = 1) {
  return ~~(Math.random() * (max - min + 1) + min);
}

function randomColor() {
  return `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(
    0,
    255
  )}, ${Math.random()})`;
}

// 客户端坐标转 canvas 坐标
function windowToCanvas(canvas, x, y) {
  const bbox = canvas.getBoundingClientRect();
  // 要考虑canvas画布大小和样式大小不一样时的坐标换算
  return {
    x: (x - bbox.left) * (canvas.width / bbox.width),
    y: (y - bbox.top) * (canvas.height / bbox.height),
  };
}

// 绘制矩形，支持逆时针绘制
function rect(context, x, y, w, h, direction) {
  // 如果是逆时针
  if (direction) {
    context.moveTo(x, y);
    context.lineTo(x, y + h);
    context.lineTo(x + w, y + h);
    context.lineTo(x + w, y);
  } else {
    context.moveTo(x, y);
    context.lineTo(x + w, y);
    context.lineTo(x + w, y + h);
    context.lineTo(x, y + h);
  }
  context.closePath();
}

// 绘制网格
function drawGrid(context, color, stepx, stepy) {
  const { width, height } = context.canvas;
  context.strokeStyle = color;
  context.lineWidth = 0.5;

  for (let i = stepx + 0.5; i < width; i += stepx + 1) {
    context.beginPath();
    context.moveTo(i, 0);
    context.lineTo(i, height);
    context.stroke();
  }
  for (let i = stepy + 0.5; i < height; i += stepy + 1) {
    context.beginPath();
    context.moveTo(0, i);
    context.lineTo(width, i);
    context.stroke();
  }
}

// 绘制虚线
function drawDashedLine(context, x1, y1, x2, y2, dashLength) {
  dashLength = dashLength === undefined ? 5 : dashLength;
  const deltaX = x2 - x1;
  const deltaY = y2 - y1;
  const numDashes = Math.floor(
    Math.sqrt(deltaX * deltaX + deltaY * deltaY) / dashLength
  );

  for (let i = 0; i < numDashes; i++) {
    context[i % 2 === 0 ? "moveTo" : "lineTo"](
      x1 + (deltaX / numDashes) * i,
      y1 + (deltaY / numDashes) * i
    );
  }

  context.stroke();
}

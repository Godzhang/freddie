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

// 绘制圆角矩形
function roundedRect(context, startX, startY, width, height, cornerRadius) {
  const endX = startX + width;
  const endY = startY + height;

  context.moveTo(startX + cornerRadius, startY);
  context.arcTo(endX, startY, endX, startY + cornerRadius, cornerRadius);
  context.arcTo(endX, endY, endX - cornerRadius, endY, cornerRadius);
  context.arcTo(startX, endY, startX, endY - cornerRadius, cornerRadius);
  context.arcTo(startX, startY, startX + cornerRadius, startY, cornerRadius);
}
// 添加圆角矩形
function addRoundedRect(
  context,
  strokeStyle = "#000",
  fillStyle = "#000",
  startX,
  startY,
  width,
  height,
  cornerRadius
) {
  context.beginPath();
  context.strokeStyle = strokeStyle;
  context.fillStyle = fillStyle;
  roundedRect(context, startX, startY, width, height, cornerRadius);
  context.closePath();
  context.stroke();
}
// 创建多边形
function createPolygonPath(centerX, centerY, radius, sides, startAngle = 0) {
  const points = getPolygonPoints(centerX, centerY, radius, sides, startAngle);
  context.beginPath();
  context.moveTo(points[0].x, points[0].y);
  for (let i = 1; i < sides; i++) {
    context.lineTo(points[i].x, points[i].y);
  }
  context.closePath();
  context.stroke();
}
// 获取多边形顶点数据
function getPolygonPoints(centerX, centerY, radius, sides, startAngle = 0) {
  const points = [];
  let angle = startAngle;

  for (let i = 0; i < sides; i++) {
    points.push({
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius, // 如果是减号就是逆时针绘制
    });
    angle += (Math.PI * 2) / sides;
  }

  return points;
}
// 绘制虚线
function drawDashedLine(
  ctx,
  x1,
  y1,
  x2,
  y2,
  dashLength = 5,
  strokeStyle = "#000"
) {
  if (typeof dashLength === "string") {
    strokeStyle = dashLength;
    dashLength = 5;
  }
  let deltaX = x2 - x1;
  let deltaY = y2 - y1;
  // 计算出分几段
  let numDashes = Math.floor(
    Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2)) / dashLength
  );
  for (let i = 0; i < numDashes; i++) {
    ctx[i % 2 === 0 ? "moveTo" : "lineTo"](
      x1 + (deltaX / numDashes) * i,
      y1 + (deltaY / numDashes) * i
    );
  }
  ctx.strokeStyle = strokeStyle;
  ctx.stroke();
}

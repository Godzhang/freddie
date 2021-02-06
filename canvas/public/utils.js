function random(min = 0, max = 1) {
  return ~~(Math.random() * (max - min + 1) + min);
}

function randomColor() {
  return `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(
    0,
    255
  )}, ${Math.random()})`;
}

function windowToCanvas(canvas, x, y) {
  const bbox = canvas.getBoundingClientRect();
  // 要考虑canvas画布大小和样式大小不一样时的坐标换算
  return {
    x: (x - bbox.left) * (canvas.width / bbox.width),
    y: (y - bbox.top) * (canvas.height / bbox.height),
  };
}

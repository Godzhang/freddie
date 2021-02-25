window.tools = {
  windowToCanvas(canvas, x, y) {
    const bbox = canvas.getBoundingClientRect();
    // 要考虑canvas画布大小和样式大小不一样时的坐标换算
    return {
      x: (x - bbox.left) * (canvas.width / bbox.width),
      y: (y - bbox.top) * (canvas.height / bbox.height),
    };
  },
  getMouse(element) {
    const mouse = { x: 0, y: 0 };
    element.addEventListener("mousemove", (e) => {
      const loc = tools.windowToCanvas(element, e.clientX, e.clientY);
      mouse.x = loc.x;
      mouse.y = loc.y;
    });
    return mouse;
  },
  // 检测两个矩形是否相交
  checkRect(rectA, rectB) {
    return !(
      rectA.x + rectA.width < rectB.x ||
      rectB.x + rectB.width < rectA.x ||
      rectA.y + rectA.height < rectB.y ||
      rectB.y + rectB.height < rectA.y
    );
  },
  // 检测两个圆是否相交
  checkCircle(cirleB, cirleA) {
    const dx = cirleB.x - cirleA.x;
    const dy = cirleB.y - cirleA.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    return distance < cirleB.radius + cirleA.radius;
  },
};

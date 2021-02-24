window.tools = {
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

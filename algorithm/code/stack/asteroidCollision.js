/**
 * time: O(n)
 * space: O(n)
 */
export default asteroids => {
  const stack = [];

  for (let i = 0, len = asteroids.length; i < len; i++) {
    stack.push(asteroids[i]);

    while (stack.length > 1) {
      let prev1 = stack[stack.length - 1];
      let prev2 = stack[stack.length - 2];
      if (prev2 > 0 && prev1 < 0) {
        if (Math.abs(prev1) === Math.abs(prev2)) {
          stack.length -= 2;
          break;
        } else if (Math.abs(prev1) > Math.abs(prev2)) {
          stack.pop();
          stack[stack.length - 1] = prev1;
        } else {
          stack.length -= 1;
        }
      } else {
        break;
      }
    }
  }

  return stack;
};

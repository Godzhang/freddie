/**
 * time: O(n)
 * space: O(n)
 */
// export default (pushed, popped) => {
//   let stack = [];

//   for (let i = 0, len = pushed.length; i < len; i++) {
//     stack.push(pushed[i]);
//     while (popped.length) {
//       if (stack[stack.length - 1] === popped[0]) {
//         stack.pop();
//         popped.shift();
//       } else {
//         break;
//       }
//     }
//   }

//   return stack.length === 0;
// };

/**
 * time: O(n)
 * space: O(1)
 */
export default (pushed, popped) => {
  let size = 0;
  for (let i = 0, j = 0, len = pushed.length; i < len; i++) {
    pushed[size++] = pushed[i];
    while (size && pushed[size - 1] === popped[j]) {
      size--;
      j++;
    }
  }

  return size === 0;
};

// export default head => {
//   if (!head || !head.next) return false;

//   let slow = head;
//   let fast = head.next;

//   while (fast && fast.next) {
//     if (slow === fast || fast.next === slow) {
//       return true;
//     }
//     slow = slow.next;
//     fast = fast.next.next;
//   }
//   return false;
// };

//
export default head => {
  if (!head || !head.next) return false;
  let set = new Set();
  let curr = head;

  while (curr) {
    if (set.has(curr)) {
      return true;
    }
    set.add(curr);
    curr = curr.next;
  }

  return false;
};

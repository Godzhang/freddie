/**
 * 快慢指针
 */
// export default head => {
//   let s = head;
//   let f = head;
//   // 先找到第一个重合点
//   while (s && f.next) {
//     s = s.next;
//     f = f.next.next;
//     if (s === f) {
//       break;
//     }
//   }
//   // 将一个指向头结点，各自走一步，即能在入环点相遇
//   f = head;
//   while (s && f) {
//     if (s === f) {
//       return s;
//     }
//     s = s.next;
//     f = f.next;
//   }
// };

/**
 * set
 */
export default head => {
  const map = new Map();
  while (head) {
    if (map.get(head)) return head;
    map.set(head, true);
    head = head.next;
  }
  return null;
};

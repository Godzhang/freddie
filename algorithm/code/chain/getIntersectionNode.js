// export default (headA, headB) => {
//   let set = new Set();
//   let currA = headA;
//   let currB = headB;

//   while (currA && currB) {
//     if (currA === currB || set.has(currA)) {
//       return currA;
//     }
//     if (set.has(currB)) {
//       return currB;
//     }
//     set.add(currA);
//     set.add(currB);
//     currA = currA.next;
//     currB = currB.next;
//   }
//   while (currA) {
//     if (set.has(currA)) {
//       return currA;
//     }
//     set.add(currA);
//     currA = currA.next;
//   }
//   while (currB) {
//     if (set.has(currB)) {
//       return currB;
//     }
//     set.add(currB);
//     currB = currB.next;
//   }
//   return null;
// };

// export default (headA, headB) => {
//   while (headA) {
//     headA.flag = true;
//     headA = headA.next;
//   }
//   while (headB) {
//     if (headB.flag) return headB;
//     headB = headB.next;
//   }
//   return null;
// };

// 双指针  a + c + b + c = b + c + a + c
// export default (headA, headB) => {
//   let currA = headA;
//   let currB = headB;

//   while (true) {
//     if (!currA && !currB) {
//       return null;
//     }
//     if (currA === currB) {
//       return currA;
//     }

//     if (!currA) {
//       currA = headB;
//       currB = currB.next;
//     } else if (!currB) {
//       currA = currA.next;
//       currB = headA;
//     } else if (currA && currB) {
//       currA = currA.next;
//       currB = currB.next;
//     }
//   }
// };

// 上例代码优化
export default (headA, headB) => {
  let currA = headA;
  let currB = headB;

  while (currA !== currB) {
    currA = currA ? currA.next : headB;
    currB = currB ? currB.next : headA;
  }

  return currA;
};

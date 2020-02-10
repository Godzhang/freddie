// 数组保存，数值交换
// export default (head, m, n) => {
//   if (!head.next) return head;

//   let arr = [];
//   while (head) {
//     arr.push(head);
//     head = head.next;
//   }

//   let len = arr.length;
//   let s = null;
//   let e = null;
//   if (m >= 2) {
//     s = arr[m - 2];
//   }
//   if (n < len) {
//     e = arr[n];
//   }

//   for (let i = n - 1; i > m - 1; i--) {
//     arr[i].next = arr[i - 1];
//   }

//   if (s) {
//     s.next = arr[n - 1];
//   }
//   arr[m - 1].next = e;

//   return s ? arr[0] : arr[n - 1];
// };

// export default (head, m, n) => {
//   let stack = [];
//   let curr = head;
//   let i = 1;

//   while (curr) {
//     if (i >= m && i <= n) {
//       stack.push(curr.val);
//     }
//     if (i > n) {
//       break;
//     }
//     i++;
//     curr = curr.next;
//   }

//   curr = head;
//   i = 1;

//   while (curr) {
//     if (i >= m && i <= n) {
//       curr.val = stack.pop();
//     }
//     if (i > n) {
//       break;
//     }
//     i++;
//     curr = curr.next;
//   }

//   return head;
// };

// 迭代
// export default (head, m, n) => {
//   if (!head) return head;

//   let prev = null;
//   let curr = head;
//   while (m > 1) {
//     prev = curr;
//     curr = curr.next;
//     m--;
//     n--;
//   }

//   let tail = curr; // 保存第 m 个结点，反转后链表的尾部
//   let con = prev; // 第 m 个结点的前一个结点，也是新链表的头部

//   // 开始反转
//   // 1 --> 2 --> null
//   let third = null;
//   while (n > 0) {
//     third = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = third;
//     n--;
//   }

//   if (con) {
//     con.next = prev;
//   } else {
//     head = prev;
//   }

//   tail.next = curr;

//   return head;
// };

// 递归
// 1 --> 2 --> null
// 1 --> 2 --> 3 --> 4 --> 5 --> null
export default (head, m, n) => {
  let left = head;
  let stop = false;
  const recurse = (right, m, n) => {
    if (n === 1) {
      return;
    }

    right = right.next;

    if (m > 1) {
      left = left.next;
    }
    recurse(right, m - 1, n - 1);

    if (left === right || right.next === left) {
      stop = true;
    }

    if (!stop) {
      let t = left.val;
      left.val = right.val;
      right.val = t;
      left = left.next;
    }
  };
  recurse(head, m, n);
  return head;
};

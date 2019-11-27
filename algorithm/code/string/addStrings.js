// export default (n1, n2) => {
//   let len = Math.max(n1.length, n2.length);
//   let res = [];
//   let carry = 0;
//   if (n1.length > n2.length) {
//     n2 = n2.padStart(len, 0);
//   } else if (n1.length < n2.length) {
//     n1 = n1.padStart(len, 0);
//   }
//   for (let i = len - 1; i >= 0; i--) {
//     let a = +n1[i];
//     let b = +n2[i];
//     let sum = a + b + carry;
//     if (sum > 9) {
//       carry = 1;
//       res.unshift(sum % 10);
//     } else {
//       res.unshift(sum);
//       carry = 0;
//     }
//   }
//   if (carry) {
//     res.unshift(carry);
//   }
//   return res.join("");
// };

export default (n1, n2) => {
  let carry = 0;
  let a = n1.length - 1;
  let b = n2.length - 1;
  let res = [];
  while (a >= 0 || b >= 0) {
    let s = a >= 0 ? +n1[a] : 0;
    let e = b >= 0 ? +n2[b] : 0;
    let sum = s + e + carry;
    if (sum > 9) {
      carry = 1;
      res.unshift(sum % 10);
    } else {
      res.unshift(sum);
      carry = 0;
    }
    a--;
    b--;
  }
  if (carry) {
    res.unshift(carry);
  }
  return res.join("");
};

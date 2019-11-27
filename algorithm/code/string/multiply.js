// export default (num1, num2) => {
//   if (num1 == "0" || num2 == "0") return "0";
//   let l1 = num1.length,
//     l2 = num2.length,
//     store = new Array(l1 + l2 - 1).fill(0),
//     t = 0,
//     r = "";
//   for (let i = 0; i < l2; i++) {
//     for (let j = 0; j < l1; j++) {
//       store[i + j] += +num2[i] * +num1[j];
//     }
//   }
//   let k = store.length;
//   while (k--) {
//     t += store[k];
//     r = (t % 10) + r;
//     t = (t / 10) | 0;
//   }
//   return t > 0 ? t + r : r;
// };

let ride = (n1, n2) => {
  let res = [];
  let carry = 0;
  for (let i = n2.length - 1; i >= 0; i--) {
    let cur = +n2[i];
    let m = n1 * cur + carry;
    if (m > 9) {
      carry = Math.floor(m / 10);
      res.unshift(m % 10);
    } else {
      res.unshift(m);
      carry = 0;
    }
  }
  if (carry) {
    res.unshift(carry);
  }
  return res.join("");
};
let plus = arr => {
  let l1 = arr[0].length;
  let l2 = arr.length;
  let res = [];
  let carry = 0;
  for (let i = l1 - 1; i >= 0; i--) {
    let sum = carry;
    for (let j = 0; j < l2; j++) {
      sum += +arr[j][i];
    }
    if (sum > 9) {
      carry = Math.floor(sum / 10);
      res.unshift(sum % 10);
    } else {
      res.unshift(sum);
      carry = 0;
    }
  }
  if (carry) {
    res.unshift(carry);
  }
  return res.join("").replace(/^0*/, "");
};

export default (n1, n2) => {
  if (n1 === "0" || n2 === "0") return "0";
  let result = [];
  let len = n2.length;
  let max = n1.length + len;
  for (let i = len - 1; i >= 0; i--) {
    let cur = +n2[i];
    let m = ride(cur, n1);
    m = m.padEnd(m.length + len - i - 1, "0");
    m = m.padStart(max, "0");
    result.push(m);
  }
  return plus(result);
};

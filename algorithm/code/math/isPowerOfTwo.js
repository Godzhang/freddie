// export default n => {
//   return Number.isInteger(Math.log2(n));
// };

// export default n => {
//   if (n === 0) return false;
//   let result = false;

//   const helper = n => {
//     if (n === 1) {
//       result = true;
//       return;
//     }
//     let merchant = n / 2;

//     if (Number.isInteger(merchant)) {
//       helper(merchant);
//     }

//     return result;
//   };

//   helper(n);

//   return result;
// };

// 一个整数如果是2的幂次方，必定可以被2的31次幂整除
// export default n => {
//   return n > 0 && Math.pow(2, 31) % n === 0;
// };

// 16 二进制 10000
// 15 二进制 01111
// & 结果    00000
// export default n => {
//   return n > 0 && (n & (n - 1)) === 0;
// };

// export default n => {
//   return /^1{1}0*$/.test(n.toString(2));
// };

// export default n => {
//   if (n < 1) return false;

//   while (n % 2 === 0) {
//     n /= 2;
//   }

//   return n === 1;
// };

export default n => {
  const power = Math.log(n) / Math.log(2);
  return Number.isInteger(power);
};

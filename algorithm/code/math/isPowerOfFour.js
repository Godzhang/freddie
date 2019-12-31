// export default num => {
//   return /^10*$/.test(num.toString(4));
// };

// export default num => {
//   let arr = [
//     1,
//     4,
//     16,
//     64,
//     256,
//     1024,
//     4096,
//     16384,
//     65536,
//     262144,
//     1048576,
//     4194304,
//     16777216,
//     67108864,
//     268435456,
//     1073741824
//   ];
//   return arr.includes(num);
// };

// export default num => {
//   if (num < 1) return false;

//   while (num % 4 === 0) {
//     num /= 4;
//   }

//   return num === 1;
// };

// 是4的幂也一定是2的幂，但是4的全部幂减一能被3整除
// export default num => {
//   return num > 0 && (num & (num - 1)) === 0 && (num - 1) % 3 === 0;
// };

export default num => {
  const power = Math.log(num) / Math.log(4);
  return Number.isInteger(power);
};

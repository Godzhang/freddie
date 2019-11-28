// export default num => {
//   if (num === 1) return true;
//   let check = (min, max) => {
//     let tmp = Math.floor((max + min) / 2);

//     if (tmp === min || tmp === max) return false;

//     let ride = tmp * tmp;
//     if (ride === num) {
//       return true;
//     } else if (ride > num) {
//       return check(min, tmp);
//     } else {
//       return check(tmp, max);
//     }
//   };
//   let helper = n => {
//     if (n === 1) return false;
//     let tmp = Math.floor(n / 2);
//     let ride = tmp * tmp;
//     if (ride === num) {
//       return true;
//     } else if (ride > num) {
//       return helper(tmp);
//     } else {
//       return check(tmp, tmp * 2);
//     }
//   };
//   return helper(num);
// };

// export default num => {
//   if (num === 1) return true;
//   let start = 2;
//   let end = Math.floor(num / 2);
//   let mid;
//   let ride;
//   while (start <= end) {
//     mid = Math.floor((start + end) / 2);
//     ride = mid * mid;
//     if (ride === num) {
//       return true;
//     } else if (ride > num) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return false;
// };

// 原理
// 1 + 3 + 5 + 7 + ... + (2n+1) = n^2 即完全平方数肯定是前n个连续奇数的和
export default num => {
  let odd = 1;
  let power = 0;
  while (true) {
    power += odd;
    odd += 2;
    if (power === num) return true;
    if (power > num) return false;
  }
};

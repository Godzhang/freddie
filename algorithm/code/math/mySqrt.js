export default num => {
  if (num === 0) return 0;
  let start = 1;
  let end = Math.floor(num / 2);
  let mid;
  let ride;
  while (start < end) {
    mid = Math.floor((start + end + 1) / 2);
    ride = mid * mid;
    if (ride > num) {
      end = mid - 1;
    } else {
      start = mid;
    }
  }
  return start;
};

// export default num => {
//   let count = 0;
//   let odd = 1;
//   let power = 0;
//   while (true) {
//     power += odd;
//     odd += 2;
//     count++;
//     if (power === num) return count;
//     if (power > num) return count - 1;
//   }
// };

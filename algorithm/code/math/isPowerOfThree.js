// export default n => {
//   return /^10*$/.test(n.toString(3));
// };

export default n => {
  return n > 0 && 1162261467 % n === 0;
};

// export default nums => {
//   return (
//     nums
//       .map(String)
//       .sort((a, b) => b + a - (a + b))
//       .join("")
//       .replace(/^0+/, "") || "0"
//   );
// };

export default nums => {
  nums.sort((a, b) => {
    let aStr = a + "";
    let bStr = b + "";
    return (
      b * Math.pow(10, aStr.length) + a - (a * Math.pow(10, bStr.length) + b)
    );
  });
  return nums.join("").replace(/^0+/, "") || "0";
};

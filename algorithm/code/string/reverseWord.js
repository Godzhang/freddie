// export default str => {
//   return str
//     .split(" ")
//     .map(item =>
//       item
//         .split("")
//         .reverse()
//         .join("")
//     )
//     .join(" ");
// };

// export default str => {
//   return str
//     .split(/\s/g)
//     .map(item =>
//       item
//         .split("")
//         .reverse()
//         .join("")
//     )
//     .join(" ");
// };

export default str => {
  return str
    .match(/[\w']+/g)
    .map(item =>
      item
        .split("")
        .reverse()
        .join("")
    )
    .join(" ");
};

// export default arr => {
//   let checkArr = arr => {
//     arr = arr.filter(item => item !== ".");
//     for (let i = 0, l = arr.length; i < l; i++) {
//       let cur = arr[i];
//       if (i !== arr.lastIndexOf(cur)) {
//         return false;
//       }
//     }
//     return true;
//   };
//   // 横向
//   for (let i = 0, l = arr.length; i < l; i++) {
//     if (!checkArr(arr[i])) return false;
//   }
//   // 纵向
//   for (let i = 0, l = arr[0].length; i < l; i++) {
//     if (!checkArr(arr.map(item => item[i]))) return false;
//   }
//   // 3*3
//   for (let i = 0, il = arr[0].length; i < il; i += 3) {
//     for (let j = 0, jl = arr.length; j < jl; j += 3) {
//       let r = [];
//       arr.slice(j, j + 3).forEach(item => {
//         r = r.concat(item.slice(i, i + 3));
//       });
//       if (!checkArr(r)) return false;
//     }
//   }

//   return true;
// };

// 只用一次遍历
export default arr => {
  let rows = {};
  let columns = {};
  let boxes = {};
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let rowIndex = j;
      let columnIndex = i;
      let boxIndex = Math.floor(i / 3) + Math.floor(j / 3) * 3;

      let cur = arr[j][i];
      if (cur === ".") continue;

      if (!rows[rowIndex]) {
        rows[rowIndex] = {};
      }
      if (rows[rowIndex][cur]) {
        return false;
      } else {
        rows[rowIndex][cur] = true;
      }

      if (!columns[columnIndex]) {
        columns[columnIndex] = {};
      }
      if (columns[columnIndex][cur]) {
        return false;
      } else {
        columns[columnIndex][cur] = true;
      }

      if (!boxes[boxIndex]) {
        boxes[boxIndex] = {};
      }
      if (boxes[boxIndex][cur]) {
        return false;
      } else {
        boxes[boxIndex][cur] = true;
      }
    }
  }
  return true;
};

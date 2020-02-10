export default mat => {
  let row = mat.length;
  let col = mat[0].length;

  const sort = node => {
    let arr = [];
    for (let i = node[0], j = node[1]; i < row && j < col; i++, j++) {
      arr.push(mat[i][j]);
    }
    arr.sort((a, b) => a - b);
    for (let i = node[0], j = node[1]; i < row && j < col; i++, j++) {
      mat[i][j] = arr.shift();
    }
  };

  for (let i = 1; i < row - 1; i++) {
    sort([i, 0]);
  }
  sort([0, 0]);
  for (let i = 1; i < col - 1; i++) {
    sort([0, i]);
  }

  return mat;
};

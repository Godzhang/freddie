(() => {

type Matrix<T> = T[][];
const run = <T>(
  matrix: Matrix<T>,
  r1: number,
  r2: number,
  c1: number,
  c2: number,
): void => {
  if (r1 > r2 || c1 > c2) return;

  // [r1][c1] -> [r1][c2]
  let r = r1;
  let c = c1;
  while (c <= c2) {
    console.log(matrix[r][c]);
    c++;
  }

  // [r1 + 1][c2] -> [r2][c2]
  r = r1 + 1;
  c = c2;
  while (r <= r2) {
    console.log(matrix[r][c]);
    r++;
  }
  // [r2][c2 - 1] -> [r2][c1]
  r = r2;
  c = c2 - 1;
  while (c >= c1) {
    console.log(matrix[r][c]);
    c--;
  }

  // [r2 - 1][c1] -> [r1 + 1][c1]
  r = r2 - 1;
  c = c1;
  while (r >= r1 + 1) {
    console.log(matrix[r][c]);
    r--;
  }

  // recursion
  run(
    matrix,
    r1 + 1,
    r2 - 1,
    c1 + 1,
    c2 - 1,
  );
};
const spiralTraverse = <T>(
  matrix: Matrix<T>,
) => {
  const r1 = 0;
  const r2 = matrix.length - 1;
  const c1 = 0;
  const c2 = matrix[0].length - 1;
  run(matrix, r1, r2, c1, c2);
};
spiralTraverse([
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16],
]);

})();
export default A => {
  let rows = A.length;
  let cols = A[0].length;
  let res = 0;
  for (let j = 0; j < cols; j++) {
    for (let i = 0; i < rows - 1; i++) {
      if (A[i].charCodeAt(j) > A[i + 1].charCodeAt(j)) {
        res++;
        break;
      }
    }
  }
  return res;
};

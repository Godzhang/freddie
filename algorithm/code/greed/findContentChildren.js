export default (g, s) => {
  let count = 0;

  for (let i = 0, len = g.length; i < len; i++) {
    let cur = g[i];
    let sIndex = s.findIndex(item => item >= cur);
    if (sIndex >= 0) {
      count++;
      s.splice(sIndex, 1);
    }
  }

  return count;
};

export default arr => {
  if (arr.length === 1) return [arr];
  let result = [];
  let n = arr.length;

  let make = (list, arr) => {
    for (let i = 0, l = arr.length; i < l; i++) {
      let m = [].concat(list);
      m.push(arr[i]);
      if (m.length === n) {
        result.push(m);
      } else {
        let r = [].concat(arr);
        r.splice(i, 1);
        make(m, r);
      }
    }
  };
  make([], arr);

  return result;
};

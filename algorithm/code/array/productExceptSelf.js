export default arr => {
  let result = [];
  let getRide = arr => {
    return arr.reduce((ride, cur) => ride * cur, 1);
  };

  for (let i = 0, len = arr.length; i < len; i++) {
    let r = [].concat(arr);
    r.splice(i, 1);
    result[i] = getRide(r);
  }
  return result;
};

let sortByLetter = arr => {
  arr.sort((a, b) => {
    for (let i = 0, l = a.length; i < l; i++) {
      if (!b[i]) {
        return 1;
      } else if (a[i] === b[i]) {
        continue;
      } else {
        return a.charCodeAt(i) - b.charCodeAt(i);
      }
    }
  });
  return arr;
};

export default (products, searchWord) => {
  let result = [];
  sortByLetter(products);
  for (let i = 1, len = searchWord.length; i <= len; i++) {
    let cur = searchWord.substring(0, i);
    let r = [];
    for (let j = 0, jl = products.length; j < jl; j++) {
      let p = products[j];
      if (p.indexOf(cur) === 0) r.push(p);
      if (r.length >= 3) break;
    }
    result.push(r);
  }
  return result;
};

export default digits => {
  let map = ["", 1, "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  if (!digits) return [];
  if (digits.length === 1) {
    return map[digits].split("");
  }
  let code = digits.split("").map(item => map[item]);

  let comb = arr => {
    let temp = [];
    for (let i = 0, il = arr[0].length; i < il; i++) {
      for (let j = 0, jl = arr[1].length; j < jl; j++) {
        temp.push(`${arr[0][i]}${arr[1][j]}`);
      }
    }
    arr.splice(0, 2, temp);
    if (arr.length > 1) {
      return comb(arr);
    } else {
      return temp;
    }
  };

  return comb(code);
};

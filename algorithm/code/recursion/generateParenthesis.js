// 回溯/递归
// 对每个位置来说只有两种选择 ( 或 )
// 左括号不够一半时，添加左括号
// 右括号少于左括号时，添加右括号
// export default n => {
//   let res = [];
//   let helper = (ps, l, r) => {
//     if (l === n && r === n) {
//       res.push(ps);
//       return;
//     }
//     if (l < n) {
//       helper(ps + "(", l + 1, r);
//     }
//     if (l > r) {
//       helper(ps + ")", l, r + 1);
//     }
//   };
//   helper("", 0, 0);
//   return res;
// };

// 循环
class Node {
  constructor(s, left, right) {
    this.s = s;
    this.left = left;
    this.right = right;
  }
}

export default n => {
  let curr = [new Node("", 0, 0)];
  for (let i = 0, len = n * 2; i < len; i++) {
    let next = [];
    for (let { s, left, right } of curr) {
      if (left < n) {
        next.push(new Node(s + "(", left + 1, right));
      }
      if (right < left) {
        next.push(new Node(s + ")", left, right + 1));
      }
    }
    curr = next;
  }
  return curr.map(item => item.s);
};

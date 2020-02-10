export default head => {
  if (!head || !head.next) return head;
  let arr = [];
  let curr = head;
  while (curr) {
    arr.push(curr);
    curr = curr.next;
  }

  let len = arr.length;
  for (let i = 1; i < len; i++) {
    let j = i;
    let tmp = arr[i].val;
    for (; j > 0; j--) {
      if (tmp < arr[j - 1].val) {
        arr[j].val = arr[j - 1].val;
      } else {
        break;
      }
    }
    arr[j].val = tmp;
  }
  for (let i = 0; i < len - 1; i++) {
    arr[i].next = arr[i + 1];
  }
  arr[len - 1].next = null;
  return arr[0];
};

// 其他的不会写，想不出来

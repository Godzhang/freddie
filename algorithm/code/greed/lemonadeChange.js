export default input => {
  // 钱箱 存储零钱
  let hand = [];
  while (input.length) {
    let money = input.shift();
    // 不需要找零钱
    if (money === 5) {
      hand.push(money);
    } else {
      // 大面值钱放前面
      hand.sort((a, b) => b - a);
      // 需要找的零钱
      let change = money - 5;
      for (let i = 0, len = hand.length; i < len; i++) {
        if (hand[i] <= change) {
          change -= hand[i];
          hand.splice(i, 1);
          i--;
        }
        if (change === 0) {
          break;
        }
      }
      // 没有足够的零钱
      if (change !== 0) {
        return false;
      } else {
        // 找完之后把顾客的钱存起来
        hand.push(money);
      }
    }
  }
  return true;
};

export default input => {
  // 钱箱 存储零钱
  let hand = [];
  // 判断是否有顾客还在
  while (input.length) {
    // 取出排在最前面顾客的钱
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

// export default bills => {
//   let five = 0;
//   let ten = 0;
//   for (let i = 0, len = bills.length; i < len; i++) {
//     let bill = bills[i];
//     if (bill === 5) {
//       five++;
//     } else if (bill === 10) {
//       if (five > 0) {
//         five--;
//         ten++;
//       } else {
//         return false;
//       }
//     } else {
//       if (five > 0 && ten > 0) {
//         five--;
//         ten--;
//       } else if (five > 2) {
//         five -= 3;
//       } else {
//         return false;
//       }
//     }
//   }
//   return true;
// };

// 使用数组，以金币面值为下标，记录有多少个该面值的金币
// export default bills => {
//   let count = [];
//   count[5] = count[10] = 0;
//   for (let i = 0, len = bills.length; i < len; i++) {
//     let bill = bills[i];
//     if (bill === 5) {
//       count[5]++;
//     } else if (bill === 10) {
//       if (count[5] > 0) {
//         count[5]--;
//         count[10]++;
//       } else {
//         return false;
//       }
//     } else {
//       if (count[5] > 0 && count[10] > 0) {
//         count[5]--;
//         count[10]--;
//       } else if (count[5] > 2) {
//         count[5] -= 3;
//       } else {
//         return false;
//       }
//     }
//   }
//   return true;
// };

// export default (gas, cost) => {
//   let tank;
//   let start = 0;
//   let use = 0;
//   let len = gas.length;
//   // 选择出发站
//   for (let i = 0; i < len; i++) {
//     // 如果加油站的油量小于到下一个加油站消耗的油量，则不能从这一站出发
//     if (gas[i] < cost[i]) {
//       continue;
//     } else {
//       tank = gas[i];
//       use = cost[i];
//       start = i;
//       // 符合条件，尝试从当前加油站出发
//       for (let j = start + 1, jl = len + start + 1; j < jl; j++) {
//         // 当前索引
//         let index = j % len;
//         // 减去路程消耗
//         tank -= use;
//         // 如果消耗后小于0，则无法到达这一站
//         if (tank < 0) {
//           break;
//         }
//         // 到站加油
//         tank += gas[index];
//         // 记录开到下一个加油站消耗的油量
//         use = cost[index];

//         if (tank >= 0 && index === start) {
//           return index;
//         }
//       }
//     }
//   }

//   return -1;
// };

export default (gas, cost) => {
  let curr_tank = 0;
  let total_tank = 0;
  let start = 0;
  for (let i = 0, len = gas.length; i < len; i++) {
    curr_tank += gas[i] - cost[i];
    total_tank += gas[i] - cost[i];
    if (curr_tank < 0) {
      start = i + 1;
      curr_tank = 0;
    }
  }
  return total_tank < 0 ? -1 : start;
};

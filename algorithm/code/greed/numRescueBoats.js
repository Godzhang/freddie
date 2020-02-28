// export default (people, limit) => {
//   let result = 0;

//   people.sort((a, b) => b - a);
//   while (people.length) {
//     let diff = limit - people.shift();
//     if (diff && diff >= people[people.length - 1]) {
//       people.pop();
//     }

//     result++;
//   }
//   return result;
// };

/**
 * 双指针
 */
// export default (people, limit) => {
//   let result = 0;
//   let start = 0;
//   let end = people.length - 1;

//   people.sort((a, b) => a - b);
//   while (start <= end) {
//     if (people[start] + people[end] <= limit) {
//       start++;
//       end--;
//     } else {
//       end--;
//     }
//     result++;
//   }

//   return result;
// };

/**
 * 计数排序
 * time: O(n)
 */
export default (people, limit) => {
  if (people.length === 0) return 0;
  let counts = new Array(limit + 1).fill(0);
  people.forEach(p => counts[p]++);
  let k = 0;
  for (let i = 0; i < limit + 1; i++) {
    while (counts[i] > 0) {
      people[k++] = i;
      counts[i]--;
    }
  }
  let res = 0;
  let curr = 0;
  for (let i = people.length - 1; i >= curr; i--) {
    if (people[i] + people[curr] <= limit) curr++;
    res++;
  }
  return res;
};

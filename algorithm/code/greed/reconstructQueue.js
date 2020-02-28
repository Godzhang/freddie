/**
 * time: O(n^2)
 * space: O(n)
 */
export default people => {
  const result = [];
  people.sort((a, b) => {
    return a[0] === b[0] ? a[1] - b[1] : b[0] - a[0];
  });
  for (let p of people) {
    result.splice(p[1], 0, p);
  }
  return result;
};

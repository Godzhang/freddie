import threeSum from "../../code/hashmap/threeSum";

expect.extend({
  toEqualTwoDimensionalArrayDisorder(received, answer) {
    received.forEach(item => item.sort((a, b) => a - b));
    answer.forEach(item => item.sort((a, b) => a - b));

    for (let i = 0, len = received.length; i < len; i++) {
      let pass = this.equals(received[i], answer[i]);
      if (!pass) {
        return {
          pass: false,
          message: () => `expect [${received[i]}], get [${answer[i]}]`
        };
      }
    }

    return {
      pass: true,
      message: () => `TwoDimensionalArray is Disorderd equal`
    };
  }
});

test("threeSum", () => {
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqualTwoDimensionalArrayDisorder([
    [-1, -1, 2],
    [-1, 0, 1]
  ]);
  expect(threeSum([1, 2, -2, -1])).toEqualTwoDimensionalArrayDisorder([]);
  expect(threeSum([0, 0, 0])).toEqualTwoDimensionalArrayDisorder([[0, 0, 0]]);
  expect(threeSum([0, 0, 0, 0])).toEqualTwoDimensionalArrayDisorder([
    [0, 0, 0]
  ]);
  expect(threeSum([-2, 0, 1, 1, 2])).toEqualTwoDimensionalArrayDisorder([
    [-2, 0, 2],
    [-2, 1, 1]
  ]);
  expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqualTwoDimensionalArrayDisorder([
    [-1, -1, 2],
    [-1, 0, 1]
  ]);
});

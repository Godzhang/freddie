import fourSum from "../../code/hashmap/fourSum";

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

test("fourSum", () => {
  expect(fourSum([1, 0, -1, 0, -2, 2], 0)).toEqualTwoDimensionalArrayDisorder([
    [-2, -1, 1, 2],
    [-2, 0, 0, 2],
    [-1, 0, 0, 1]
  ]);
});

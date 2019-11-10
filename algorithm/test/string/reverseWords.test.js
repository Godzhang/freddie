import reverseWords from "../../code/string/reverseWord";

test("reverseWords: Let's take LeetCode contest", () => {
  expect(reverseWords(`Let's take LeetCode contest`)).toBe(
    `s'teL ekat edoCteeL tsetnoc`
  );
});

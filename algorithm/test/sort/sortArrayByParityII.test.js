import sortArrayByParityII from "../../code/sort/sortArrayByParityII";

test("sortArrayByParityII", () => {
  expect(sortArrayByParityII([4, 2, 5, 7, 1, 6]).join()).toMatch(
    /2,1,4,5,6,7|4,5,2,7,6,1/
  );
});

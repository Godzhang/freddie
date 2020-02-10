import addTwoNumbers from "../../code/chain/addTwoNumbers-445";
import { toString, ArrayToLinkedList } from "../../helper/chain/utils";

test("addTwoNumbers", () => {
  expect(
    toString(
      addTwoNumbers(
        ArrayToLinkedList([7, 2, 4, 3]),
        ArrayToLinkedList([5, 6, 4])
      )
    )
  ).toBe("7,8,0,7");
  expect(
    toString(addTwoNumbers(ArrayToLinkedList([9]), ArrayToLinkedList([1])))
  ).toBe("1,0");
});

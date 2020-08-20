import { listFromArray, printLinkedList } from "./ListNode";
import reverseList from "./problem";

const cases = [
  [
    [1, 2, 3, 4, 5, 6],
    [6, 5, 4, 3, 2, 1]
  ]
];

cases.forEach(([input, expected]) => {
  test(`${input} - expected: ${expected}`, () => {
    const head = listFromArray(input);
    const reversed = reverseList(head);
    expect(printLinkedList(reversed)).toStrictEqual(expected);
  });
});

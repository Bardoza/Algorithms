import isPalindome from "./problem";
const cases = [
  ["Tact Coa", true]
  // ["Super coca", false]
];

cases.forEach(([input, expected]) => {
  test(`Input: ${input} - expeccted ${expected}`, () => {
    expect(isPalindome(input)).toBe(expected);
  });
});

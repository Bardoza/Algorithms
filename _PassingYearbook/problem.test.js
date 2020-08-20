import findSignatureCounts from "./problem";

const cases = [
  [
    [2, 1],
    [2, 2]
  ]
  // [
  //   [1, 2],
  //   [1, 1]
  // ]
];

cases.forEach(([input, expected]) => {
  test(`Input: ${input} - expeccted ${expected}`, () => {
    expect(findSignatureCounts(input)).toBe(expected);
  });
});

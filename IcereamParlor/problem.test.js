import icecreamParlor from "./problem";

const cases = [
  [4, [1, 4, 5, 3, 2], [1, 4]],
  [4, [2, 2, 4, 3], [1, 2]]
];

cases.forEach(([m, arr, expected]) => {
  test(`Input: ${m} - expeccted ${expected}`, () => {
    expect(icecreamParlor(m, arr)).toStrictEqual(expected);
  });
});

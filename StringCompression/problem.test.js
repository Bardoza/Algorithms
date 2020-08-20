import compressString from "./problem";

const cases = [
  ["aabcccccaaa", "a2b1c5a3"],
  ["a", "a"],
  ["AaAabbbbbsssshhhhhhh", "A1a1A1a1b5s4h7"]
];

cases.forEach(([input, expected]) => {
  test(`Input: ${input} - expeccted ${expected}`, () => {
    expect(compressString(input)).toBe(expected);
  });
});

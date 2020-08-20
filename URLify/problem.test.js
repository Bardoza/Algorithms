import URLify from "./problem";

const cases = [
  { input: ["Mr John Smith    ", 13], expected: "Mr%20John%20Smith" }
];

cases.forEach(({ input, expected }) => {
  test(`${input[0]} - expected: ${expected}`, () => {
    expect(URLify(...input)).toBe(expected);
  });
});

import isOneAway from "./problem";

const cases = [
  ["pale", "ple", true],
  ["pae", "pale", true],
  ["pales", "pale", true],
  ["pale", "bale", true],
  ["pale", "bake", false]
];

cases.forEach(([a, b, expected]) => {
  test(a + " " + b, () => {
    expect(isOneAway(a, b)).toBe(expected);
  });
});

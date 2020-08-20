import getMilestoneDay from "./problem";

const cases = [
  [
    [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
    [100, 200, 500],
    [4, 6, 10]
  ],
  [
    [100, 200, 300, 400, 500],
    [300, 800, 1000, 1400],
    [2, 4, 4, 5]
  ],
  [
    [700, 800, 600, 400, 600, 700],
    [3100, 2200, 800, 2100, 1000],
    [5, 4, 2, 3, 2]
  ]
];

cases.forEach(([reveneue, milestone, expected]) => {
  test(`Input: ${reveneue} - expeccted ${expected}`, () => {
    expect(getMilestoneDay(reveneue, milestone)).toStrictEqual(expected);
  });
});

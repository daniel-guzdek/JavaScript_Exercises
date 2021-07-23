const minMax = require('./minMax');

test("Array: [1] returns both the minimum and maximum numbers, in that order: [1, 1]", () => {
  expect(minMax([1])).toStrictEqual([1, 1]);
});

test("Array [67, 13, 4000, 888] returns both the minimum and maximum numbers, in that order: [13, 4000]", () => {
  expect(minMax([67, 13, 4000, 888])).toStrictEqual([13, 4000]);
});
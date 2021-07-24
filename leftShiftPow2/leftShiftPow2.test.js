const shiftToLeft = require('./leftShiftPow2');

test("9 << 3 = 72", () => {
  expect(shiftToLeft(9, 3)).toBe(72);
});

test("-32 << 2 = 80", () => {
  expect(shiftToLeft(-32, 2)).toBe(-128);
});
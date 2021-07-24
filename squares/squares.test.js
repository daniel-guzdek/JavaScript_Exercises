const numberSquares = require('./squares');

test("Square pyramidal number 2 consists of 5 elements", () => {
  expect(numberSquares(2)).toBe(5)
});

test("Square pyramidal number 4 consists of 30 elements", () => {
  expect(numberSquares(4)).toBe(30)
});

test("Square pyramidal number 5 consists of 55 elements", () => {
  expect(numberSquares(5)).toBe(55)
});
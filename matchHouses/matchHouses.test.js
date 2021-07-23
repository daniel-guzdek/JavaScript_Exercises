const matchHouses = require('./matchHouses');

test("Step 0 returns 0 matchsticks.", () => {
  expect(matchHouses(0)).toBe(0);
});

test("Step 1 returns 6 matchsticks.", () => {
  expect(matchHouses(1)).toBe(6);
});

test("Step 4 returns 21 matchsticks.", () => {
  expect(matchHouses(4)).toBe(21);
});

test("Step 87 returns 436 matchsticks.", () => {
  expect(matchHouses(87)).toBe(436);
});
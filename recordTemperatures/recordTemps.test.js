const recordTemps = require('./recordTemps');

test("A comparison of arrays of daily low/high temperature records should return an array of new temperature records for each day of the week", () => {
  expect(recordTemps([[4, 19], [3, 32]], [[6, 27], [8, 12]])).toStrictEqual([[4, 27], [3, 32]]);
});

test("A comparison of arrays of daily low/high temperature records should return an array of new temperature records for each day of the week", () => {
  expect(recordTemps([[34, 82], [24, 82], [20, 89],  [5, 88],  [9, 88], [26, 89], [27, 83]], [[44, 72], [19, 70], [40, 69], [39, 68], [33, 64], [36, 70], [38, 69]])).toStrictEqual([[34, 82], [19, 82], [20, 89], [5, 88], [9, 88], [26, 89], [27, 83]]);
});
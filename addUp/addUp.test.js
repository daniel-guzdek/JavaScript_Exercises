const addUp = require('./addUp');

test("The input is 4 then function should return 10.", () => {
  expect(addUp(4)).toBe(10);
});

test("The input is 13 then function should return 91.", () => {
  expect(addUp(13)).toBe(91);
});

test("The input is 600 then function should return 180300.", () => {
  expect(addUp(600)).toBe(180300);
});
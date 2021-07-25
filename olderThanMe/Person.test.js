const Person = require('./Person');

test("should return proper sentence", () => {
  const p1 = new Person("Samuel", 24);
  const p2 = new Person("Joel", 36);
  const p3 = new Person("Lily", 24);

  expect(p1.compareAge(p2)).toEqual("Joel is older than me.");
  expect(p2.compareAge(p1)).toEqual("Samuel is younger than me.");
  expect(p1.compareAge(p3)).toEqual("Lily is the same age as me.");
})
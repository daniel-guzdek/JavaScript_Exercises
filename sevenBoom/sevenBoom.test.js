const sevenBoom = require('./sevenBoom');

test("Array [35, 65, 7, 13]", () => {
    expect(sevenBoom([35, 65, 7, 13])).toBe("BOOM");
});

test("Array [3, 12, 1, 562, 95]", () => {
    expect(sevenBoom([3, 12, 1, 562, 95])).toBe("None of the items contain 7 within them.");
});
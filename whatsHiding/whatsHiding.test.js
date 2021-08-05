const detectWord = require('./whatsHiding');

test("String 'UcUNFYGaFYFYGtNUH' returns 'cat'", () => {
    expect(detectWord("UcUNFYGaFYFYGtNUH")).toBe("cat");
});

test("String 'bEEFGBuFBRrHgUHlNFYaYr' returns 'burglar'", () => {
    expect(detectWord("bEEFGBuFBRrHgUHlNFYaYr")).toBe("burglar");
});

test("String 'YFemHUFBbezFBYzFBYLleGBYEFGBMENTment' returns 'embezzlement'", () => {
    expect(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")).toBe("embezzlement");
});
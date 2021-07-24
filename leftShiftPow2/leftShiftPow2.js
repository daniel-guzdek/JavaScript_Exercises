function shiftToLeft(x, y) {
	// Bitwise shifting any number x to the left by y bits yields x * 2 ** y. So e.g.: 9 << 3 translates to: 9 * (2 ** 3) = 9 * (8) = 72.

  let result;

  result = x * 2 ** y;
  return result;
}

module.exports = shiftToLeft;
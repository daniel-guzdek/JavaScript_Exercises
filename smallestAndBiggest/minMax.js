function minMax(arr) {
  const sortedArr = arr.sort((a, b) => {
    return a - b;
  });

  return [sortedArr[0], sortedArr[sortedArr.length - 1]];
}

module.exports = minMax;
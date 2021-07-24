function numberSquares(n) {

  let arr = [];
  let result;

  for(let i = 1; i < n + 1; i++) {
    arr.push(i * i);
  }

  result = arr.reduce((prev, curr) => prev + curr);
  return result;
}

module.exports = numberSquares;
function addUp(num) {
  let arr = [];
  let result;

	for(let i = 1; i < num + 1; i++) {
    arr.push(i);
  }

  result = arr.reduce((prev, curr) => prev + curr);
  return result;
}

module.exports = addUp;
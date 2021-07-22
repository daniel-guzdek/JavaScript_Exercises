function matchHouses(step) {
  let matchsticks;

  if(step <= 0) {
    matchsticks = 0;
    return matchsticks;
  } else {
    matchsticks = (6 * step) - (step - 1);
    return matchsticks;
  }
}

module.exports = matchHouses;
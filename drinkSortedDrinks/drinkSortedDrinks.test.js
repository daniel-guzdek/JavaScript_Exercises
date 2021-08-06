const sortDrinkByPrice = require('./drinkSortedDrinks');

test("Function 'sortDrinkByPrice' with given proper parameter should return sorted by price array of drinks", () => {
  expect(sortDrinkByPrice([
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
  ])).toEqual([{ name: 'lime', price: 10 }, { name: 'lemonade', price: 50 }]);
})
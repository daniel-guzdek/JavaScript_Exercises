function sortDrinkByPrice(drinks) {

  const sortedDrinks = drinks.sort((a, b) => a.price - b.price );
  return sortedDrinks;
}

console.log(sortDrinkByPrice([
  {name: "lemonade", price: 50},
  {name: "lime", price: 10}
]));

module.exports = sortDrinkByPrice;
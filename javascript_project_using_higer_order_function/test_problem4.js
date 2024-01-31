// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

const inventory = require('./inventory.js');
const get_year_of_cars = require('./problem4.js');

let year_of_cars = get_year_of_cars(inventory);
console.log(year_of_cars);
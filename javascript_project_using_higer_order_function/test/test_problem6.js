// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

const inventory = require('../inventory.js');
const get_audi_and_bmw_cars = require('../problem6.js');

let audi_and_bmw_cars = get_audi_and_bmw_cars(inventory);

console.log(JSON.stringify(audi_and_bmw_cars));
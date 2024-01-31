// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

const inventory = require('./inventory.js');
const get_year_of_cars = require('./problem4.js');
const get_cars_older_than_2000 = require('./problem5.js');

let year_of_cars = get_year_of_cars(inventory);
let cars_older_than_2000 = get_cars_older_than_2000(year_of_cars);

console.log(cars_older_than_2000);
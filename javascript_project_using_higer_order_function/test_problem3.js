// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

const inventory = require('./inventory.js');
const sort_by_model = require('./problem3.js');

let cars_sorted_by_model = sort_by_model(inventory);
console.log(cars_sorted_by_model);
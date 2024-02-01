// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
// "Car 33 is a *car year goes here* *car make goes here* *car model goes here*"

const inventory = require('../inventory.js');
const get_car_by_id = require('../problem1.js');
const id = 90;
let car_by_id = get_car_by_id();

if(typeof car_by_id === 'string') {
    console.log(car_by_id);
} else {
    console.log(`Car 33 is a ${car_by_id['car_year']} ${car_by_id['car_make']} ${car_by_id['car_model']}`);
}
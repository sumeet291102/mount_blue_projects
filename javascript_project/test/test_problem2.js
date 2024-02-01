// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
// "Last car is a *car make goes here* *car model goes here*"

const inventory = require('../inventory.js');
const get_last_car = require('../problem2.js');

last_car = get_last_car(inventory);

if(typeof last_car === 'string') {
    console.log(last_car);
}
else {
    console.log(`Last car is a ${last_car['car_year']} ${last_car['car_make']} ${last_car['car_model']}`);
}
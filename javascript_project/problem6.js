// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

function get_audi_and_bmw_cars(inventory) {

    if(year_of_cars === undefined) {
        return 'inventory is undefined';
    }

    let audi_and_bmw_cars = [];
    for(let car = 0; car < inventory.length; car++) {
        if(inventory[car]['car_make'] === 'Audi' || inventory[car]['car_make'] === 'BMW') {
            audi_and_bmw_cars.push(inventory[car]);
        }
    }
    return audi_and_bmw_cars;
}

module.exports = get_audi_and_bmw_cars;
// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

function get_year_of_cars(inventory) {

    if(inventory === undefined) {
        return 'inventory is undefined';
    }

    let year_of_cars = [];
    for(let car = 0; car < inventory.length; car++) {
        year_of_cars.push(inventory[car]['car_year']);
    }

    return year_of_cars;
}

module.exports = get_year_of_cars;
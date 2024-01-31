// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

function compare(car1, car2) {
    if ( car1['car_model'] < car2['car_model'] ){
        return -1;
    }
    if ( car1['car_model'] > car2['car_model'] ){
        return 1;
    }
    return 0;
}

function sort_by_model(inventory) {

    if(inventory === undefined) {
        return 'inventory not defined';
    }

    inventory.sort(compare)
    return inventory;
}

module.exports = sort_by_model;
// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

function sort_by_model(inventory) {

    if(inventory === undefined) {
        return 'inventory not defined';
    }

    for(let car1 = 0; car1 < inventory.length; car1++) {
        for(let car2 = 0; car2 < inventory.length - car1 - 1; car2++) {
            if(inventory[car2]['car_model'] > inventory[car2 + 1]['car_model']) {
                let temp = inventory[car2];
                inventory[car2] = inventory[car2 + 1];
                inventory[car2 + 1] = temp;
            }
        }
    }
    return inventory;
}

module.exports = sort_by_model;
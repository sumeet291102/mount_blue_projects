// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
// "Car 33 is a *car year goes here* *car make goes here* *car model goes here*"

function get_car_by_id(inventory, id) {

    // console.log(typeof inventory);
    if(typeof inventory != 'object' || id === undefined) {
        return 'inventory not iterateable, or id undefined';
    }

    for(let car = 0; car < inventory.length; car++) {
        if(inventory[car]['id'] === id) {
            return inventory[car];  
        }
    }
    
    return `car with id ${id} not found`;
}

module.exports = get_car_by_id;
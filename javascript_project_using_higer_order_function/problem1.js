// ==== Problem #1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by calling a function that will return the data for that car. Then log the car's year, make, and model in the console log in the format of:
// "Car 33 is a *car year goes here* *car make goes here* *car model goes here*"

function get_car_by_id(inventory, id) {
    if(typeof inventory != 'object' || id === undefined) {
        return 'inventory not iterateable, or id undefined';
    }
    
    inventory_with_car_id = inventory.filter((car) => {
        return (car['id'] === id);
    })
    
    if(inventory_with_car_id.length === 0) {
        return `car with id ${id} not found`;
    }
    
    obj_inventory_with_car_id = inventory_with_car_id.reduce((acc, curr) => {
        Object.assign(acc, curr)
    })

    return obj_inventory_with_car_id;
}

module.exports = get_car_by_id;
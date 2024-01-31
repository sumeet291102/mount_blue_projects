// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
// "Last car is a *car make goes here* *car model goes here*"

function get_last_car(inventory) {

    if(inventory.length === 0) {
        return 'Empty inventory';
    }
    
    let last_car;
    for(let car = 0; car < inventory.length; car++) {
        last_car = inventory[car];
    }
    return last_car;
}

module.exports = get_last_car;
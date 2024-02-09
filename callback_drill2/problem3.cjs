/* 
	Problem 3: Write a function that will return all cards that belong to a particular list based on the listID that is passed to it from the given data in cards.json. Then pass control back to the code that called it by using a callback function.
*/


const cards = require('./cards_1.json');

let get_all_the_cards_of_list_id = (list_id, cb) => {
    setTimeout(() => {
        if(cards[list_id] === undefined) {
            cb('no_data');
        }
        else {
            cb(cards[list_id]);
        }
    }, 2000)
}

module.exports = get_all_the_cards_of_list_id;
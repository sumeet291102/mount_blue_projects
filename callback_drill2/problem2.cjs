/* 
	Problem 2: Write a function that will return all lists that belong to a board based on the boardID that is passed to it from the given data in lists.json. Then pass control back to the code that called it by using a callback function.
*/


const lists = require('./lists_1.json');

let get_all_the_lists_of_board_id = (board_id, cb) => {
    setTimeout(() => {
        if(lists[board_id] === undefined) {
            cb('no data');
        }
        else {
            cb(lists[board_id]);
        }
    }, 2000)
}

module.exports = get_all_the_lists_of_board_id;
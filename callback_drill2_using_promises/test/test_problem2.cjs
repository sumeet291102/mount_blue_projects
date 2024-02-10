/* 
	Problem 2: Write a function that will return all lists that belong to a board based on the boardID that is passed to it from the given data in lists.json. Then pass control back to the code that called it by using a callback function.
*/


let get_all_the_lists_of_board_id = require('../problem2.cjs');

get_all_the_lists_of_board_id('mcu453ed').then(data => { 
    console.log(data);
})
.catch(err => {
    console.log(err);
})
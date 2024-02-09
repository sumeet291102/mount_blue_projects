/* 
	Problem 3: Write a function that will return all cards that belong to a particular list based on the listID that is passed to it from the given data in cards.json. Then pass control back to the code that called it by using a callback function.
*/


let get_all_the_cards_of_list_id = require('../problem3.cjs');

get_all_the_cards_of_list_id('qwsa221', (data) => {
    console.log(data);
})
/* 
	Problem 1: Write a function that will return a particular board's information based on the boardID that is passed from the given list of boards in boards.json and then pass control back to the code that called it by using a callback function.
*/


let get_the_board_with_board_id = require('../problem1.cjs');

get_the_board_with_board_id('mcu453ed').then(data => { 
    console.log(data);
})
.catch(err => {
    console.log(err);
})


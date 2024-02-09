/* 
	Problem 1: Write a function that will return a particular board's information based on the boardID that is passed from the given list of boards in boards.json and then pass control back to the code that called it by using a callback function.
*/


const boards = require('./boards_1.json');

let get_the_board_with_board_id = (board_id, cb) => {
    setTimeout(() => {

        let board_with_board_id;

        boards.forEach((board) => {
            if(board['id'] === board_id) {
                board_with_board_id = board;
            }
        })

        if(board_with_board_id === undefined) {
            cb('no data');
        }
        else {
            cb(board_with_board_id);
        }

    }, 2000)
}

module.exports = get_the_board_with_board_id;
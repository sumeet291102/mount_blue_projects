/* 
	Problem 5: Write a function that will use the previously written functions to get the following information. You do not need to pass control back to the code that called it.

    Get information from the Thanos boards
    Get all the lists for the Thanos board
    Get all cards for the Mind and Space lists simultaneously
*/


let get_the_board_with_board_id = require('./problem1.cjs');
let get_all_the_lists_of_board_id = require('./problem2.cjs');
let get_all_the_cards_of_list_id = require('./problem3.cjs');
let boards = require('./boards_1.json');
let lists = require('./lists_1.json');

let get_info = (board_name, list1_name, list2_name) => {
    
    if(board_name === undefined || list1_name === undefined || list2_name === undefined) {
        console.log('board name or list name is undefined');
    }

    else {
        let board_id, list1_id, list2_id;
    
        boards.forEach((board) => {
            if(board['name'] === board_name) board_id = board['id'];
        })
    
        if(lists[board_id] === undefined) {
            console.log('no data');
        }
        else {
            lists[board_id].forEach((list) => {
                if(list['name'] === list1_name) list1_id = list['id'];
                if(list['name'] === list2_name) list2_id = list['id'];
            })
        
            get_the_board_with_board_id(board_id)
            .then(data => {
                console.log(data);
                return get_all_the_lists_of_board_id(board_id)
            })
            .then(data => {
                console.log(data);
                return get_all_the_cards_of_list_id(list1_id)
            })
            .then(data => {
                console.log(data);
                return get_all_the_cards_of_list_id(list2_id);
            })
            .then(data => {
                console.log(data);
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
}

module.exports = get_info;
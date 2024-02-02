// Find the highest number of times one player has been dismissed by another player

function compare(player1, player2) {
    if (player1['count'] > player2['count']) {
        return -1;
    }
    if (player1['count'] < player2['count']) {
        return 1;
    }
    return 0;
}

const { parse } = require("csv-parse");
const fs = require("fs");

const path = '/home/sumeet291102/projects/project/ipl_project_using_javascript/src/data/deliveries.csv';

const deliveries = [];

function calc(deliveries) {
    let player_dismissed_by_another_player = {};

    deliveries.forEach(delivery => {
        if (delivery['player_dismissed'] !== '' && delivery['dismissal_kind'] != 'run out') {
            player_dismissed_by_another_player[`${delivery['batsman']} dismissed by ${delivery['bowler']}`] === undefined ? player_dismissed_by_another_player[`${delivery['batsman']} dismissed by ${delivery['bowler']}`] = 1 : player_dismissed_by_another_player[`${delivery['batsman']} dismissed by ${delivery['bowler']}`]++;
        }
    });

    let player_dismissed_by_another_player_arr = [];

    for (let player_involved in player_dismissed_by_another_player) {
        let player_involved_obj = {};
        player_involved_obj['name'] = player_involved;
        player_involved_obj['count'] = player_dismissed_by_another_player[player_involved];
        player_dismissed_by_another_player_arr.push(player_involved_obj);
    }

    player_dismissed_by_another_player_arr.sort(compare);
    return player_dismissed_by_another_player_arr[0];
}

fs.createReadStream(path)
    .pipe(
        parse({
            delimiter: ",",
            columns: true,
            trim: true,
        })
    )
    .on("data", function (row) {
        deliveries.push(row);
    })
    .on("error", function (error) {
        console.log(error.message);
    })
    .on("end", function () {
        let highest_no_of_times_a_player_has_been_dismissed_by_another_player = calc(deliveries);
        let highest_no_of_times_a_player_has_been_dismissed_by_another_player_json = JSON.stringify(highest_no_of_times_a_player_has_been_dismissed_by_another_player);
        let output_path = '/home/sumeet291102/projects/project/ipl_project_using_javascript/src/public/output/highest_no_of_times_a_player_has_been_dismissed_by_another_player.json';

        fs.writeFile(output_path, highest_no_of_times_a_player_has_been_dismissed_by_another_player_json, (err) => {
            if (err) {
                console.log(err.message);
                return;
            }
        })
    });




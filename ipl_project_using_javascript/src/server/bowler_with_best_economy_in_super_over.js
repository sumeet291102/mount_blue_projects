// Find the bowler with the best economy in super overs

function compare(bowler1, bowler2) {
    if (bowler1['economy'] < bowler2['economy']) {
        return -1;
    }
    if (bowler1['economy'] > bowler2['economy']) {
        return 1;
    }
    return 0;
}

const { parse } = require("csv-parse");
const fs = require("fs");

const path = '/home/sumeet291102/projects/project/ipl_project_using_javascript/src/data/deliveries.csv';

function calc(deliveries) {
    let bowler_runs_per_over = {};

    deliveries.forEach(delivery => {

        if (delivery['is_super_over'] === '1') {
            bowler_runs_per_over[`${delivery['bowler']},${delivery['match_id']},${delivery['over']}`] === undefined ? bowler_runs_per_over[`${delivery['bowler']},${delivery['match_id']},${delivery['over']}`] = parseInt(delivery['total_runs']) : bowler_runs_per_over[`${delivery['bowler']},${delivery['match_id']},${delivery['over']}`] += parseInt(delivery['total_runs']);
        }

    })

    let bowler_runs = {};
    let bowler_overs = {};

    for (let bowler in bowler_runs_per_over) {
        let bowler_name = bowler.split(',')[0];
        bowler_runs[bowler_name] === undefined ? bowler_runs[bowler_name] = bowler_runs_per_over[bowler] : bowler_runs[bowler_name] += bowler_runs_per_over[bowler];

        bowler_overs[bowler_name] === undefined ? bowler_overs[bowler_name] = 1 : bowler_overs[bowler_name]++;
    }

    let bowler_economy = {};

    for (let bowler in bowler_runs) {
        bowler_economy[bowler] = bowler_runs[bowler] / bowler_overs[bowler];
    }

    let bowler_arr = [];

    for (let bowler in bowler_economy) {
        let player = {};
        player['name'] = bowler;
        player['economy'] = bowler_economy[bowler];
        bowler_arr.push(player);
    }

    bowler_arr.sort(compare);
    return bowler_arr[0];
}


const deliveries = [];

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
        let bowler_with_best_economy_in_super_over = calc(deliveries);
        let bowler_with_best_economy_in_super_over_json = JSON.stringify(bowler_with_best_economy_in_super_over);
        let output_path = '/home/sumeet291102/projects/project/ipl_project_using_javascript/src/public/output/bowler_with_best_economy_in_super_over.json';

        fs.writeFile(output_path, bowler_with_best_economy_in_super_over_json, (err) => {
            if (err) {
                console.log(err.message);
                return;
            }
        })
    });
// Top 10 economical bowlers in the year 2015

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

const path_matches = '/home/sumeet291102/projects/project/ipl_project_using_javascript/src/data/matches.csv';
const path_deliveries = '/home/sumeet291102/projects/project/ipl_project_using_javascript/src/data/deliveries.csv';

function calc(seasons_index, deliveries) {

    if(seasons_index === undefined || deliveries === undefined) {
        return "Data is undefined";
    }

    let bowler_runs_per_over = {};

    deliveries.forEach(delivery => {
        if (seasons_index[delivery['match_id']] === '2015') {
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
    return bowler_arr.slice(0, 10);
}

const matches = [];

fs.createReadStream(path_matches)
    .pipe(
        parse({
            delimiter: ",",
            columns: true,
            trim: true,
        })
    )
    .on("data", function (row) {
        matches.push(row);
    })
    .on("error", function (error) {
        console.log(error.message);
    })
    .on("end", function () {
        let seasons_index = {};

        matches.forEach(match => {
            seasons_index[match['id']] = match['season']
        })

        const deliveries = [];

        fs.createReadStream(path_deliveries)
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
                let top_10_economical_bowlers_in_year_2015 = calc(seasons_index, deliveries);
                let top_10_economical_bowlers_in_year_2015_json = JSON.stringify(top_10_economical_bowlers_in_year_2015);
                let output_path = '/home/sumeet291102/projects/project/ipl_project_using_javascript/src/public/output/top_10_economical_bowlers_in_year_2015.json';

                fs.writeFile(output_path, top_10_economical_bowlers_in_year_2015_json, (err) => {
                    if (err) {
                        console.log(err.message);
                        return;
                    }
                })
            });
    });

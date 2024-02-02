// Find the strike rate of a batsman for each season

const { parse } = require("csv-parse");
const fs = require("fs");

const path_matches = '/home/sumeet291102/projects/project/ipl_project_using_javascript/src/data/matches.csv';
const path_deliveries = '/home/sumeet291102/projects/project/ipl_project_using_javascript/src/data/deliveries.csv';

function calc(seasons_index, deliveries) {
    let batsman_runs_per_season = {};
    let batsman_bowls_faced_per_season = {};

    deliveries.forEach(delivery => {
        if (batsman_runs_per_season[seasons_index[delivery['match_id']]] === undefined) {
            batsman_runs_per_season[seasons_index[delivery['match_id']]] = {};
        }

        batsman_runs_per_season[seasons_index[delivery['match_id']]][delivery['batsman']] === undefined ? batsman_runs_per_season[seasons_index[delivery['match_id']]][delivery['batsman']] = parseInt(delivery['batsman_runs']) : batsman_runs_per_season[seasons_index[delivery['match_id']]][delivery['batsman']] += parseInt(delivery['batsman_runs']);

        if (delivery['wide_runs'] === '0') {
            if (batsman_bowls_faced_per_season[seasons_index[delivery['match_id']]] === undefined) {
                batsman_bowls_faced_per_season[seasons_index[delivery['match_id']]] = {};
            }

            batsman_bowls_faced_per_season[seasons_index[delivery['match_id']]][delivery['batsman']] === undefined ? batsman_bowls_faced_per_season[seasons_index[delivery['match_id']]][delivery['batsman']] = 1 : batsman_bowls_faced_per_season[seasons_index[delivery['match_id']]][delivery['batsman']]++;
        }

    })

    let batsman_strike_rate_per_season = {};
    for (let season in batsman_runs_per_season) {

        let batsman_strike_rate_in_season = {};

        for (let batsman in batsman_runs_per_season[season]) {
            batsman_strike_rate_in_season[batsman] = (batsman_runs_per_season[season][batsman] / batsman_bowls_faced_per_season[season][batsman]) * 100;
        }

        batsman_strike_rate_per_season[season] = batsman_strike_rate_in_season;
    }

    return batsman_strike_rate_per_season;

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
                let strike_rate_of_batsman_pre_season = calc(seasons_index, deliveries);
                let strike_rate_of_batsman_pre_season_json = JSON.stringify(strike_rate_of_batsman_pre_season);
                let output_path = '/home/sumeet291102/projects/project/ipl_project_using_javascript/src/public/output/strike_rate_of_batsman_pre_season.json';

                fs.writeFile(output_path, strike_rate_of_batsman_pre_season_json, (err) => {
                    if (err) {
                        console.log(err.message);
                        return;
                    }
                })
            });
    });

// Extra runs conceded per team in the year 2016

const { parse } = require("csv-parse");
const fs = require("fs");

const path_matches = '/home/sumeet291102/projects/project/ipl_project_using_javascript/src/data/matches.csv';
const path_deliveries = '/home/sumeet291102/projects/project/ipl_project_using_javascript/src/data/deliveries.csv';
function calc(seasons_index, deliveries) {
    let teams_extra_runs = {};

    deliveries.forEach(delivery => {
        if (seasons_index[delivery['match_id']] === '2016') {
            teams_extra_runs[delivery['bowling_team']] === undefined ? teams_extra_runs[delivery['bowling_team']] = 1 : teams_extra_runs[delivery['bowling_team']]++;
        }
    })

    return teams_extra_runs;
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
                let extra_runs_conceded_per_team_in_year_2016 = calc(seasons_index, deliveries);
                let extra_runs_conceded_per_team_in_year_2016_json = JSON.stringify(extra_runs_conceded_per_team_in_year_2016);
                let output_path = '/home/sumeet291102/projects/project/ipl_project_using_javascript/src/public/output/extra_runs_conceded_per_team_in_year_2016.json';

                fs.writeFile(output_path, extra_runs_conceded_per_team_in_year_2016_json, (err) => {
                    if (err) {
                        console.log(err.message);
                        return;
                    }
                })
            });
    });

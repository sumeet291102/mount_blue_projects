// Number of matches won per team per year in IPL.

const { parse } = require("csv-parse");
const fs = require("fs");

const path = '/home/sumeet291102/projects/project/ipl_project_using_javascript/src/data/matches.csv';
const matches = [];

function calc(matches) {
    let seasons_winners = {};

    matches.forEach(match => {
        if (seasons_winners[match['season']] === undefined) {
            seasons_winners[match['season']] = {};
        }
        seasons_winners[match['season']][match['winner']] === undefined ? seasons_winners[match['season']][match['winner']] = 1 : seasons_winners[match['season']][match['winner']]++;
    });

    return seasons_winners;
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
        matches.push(row);
    })
    .on("error", function (error) {
        console.log(error.message);
    })
    .on("end", function () {
        let matches_won_per_team_per_year = calc(matches);
        let matches_won_per_team_per_year_json = JSON.stringify(matches_won_per_team_per_year);
        let output_path = '/home/sumeet291102/projects/project/ipl_project_using_javascript/src/public/output/matches_won_per_team_per_year.json';

        fs.writeFile(output_path, matches_won_per_team_per_year_json, (err) => {
            if (err) {
                console.log(err.message);
                return;
            }
        })
    });




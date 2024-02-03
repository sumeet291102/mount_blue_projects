// Number of matches played per year for all the years in IPL.

const { parse } = require("csv-parse");
const fs = require("fs");

const path = '/home/sumeet291102/projects/project/ipl_project_using_javascript/src/data/matches.csv';
const matches = [];

function calc(matches) {

    if(matches === undefined) {
        return "Data is undefined";
    }

    let matches_played_per_season = {};

    matches.forEach(match => {
        matches_played_per_season[match['season']] === undefined ? matches_played_per_season[match['season']] = 1 : matches_played_per_season[match['season']]++;
    });

    return matches_played_per_season;
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
        let matches_per_year = calc(matches);
        let matches_per_year_json = JSON.stringify(matches_per_year);
        let output_path = '/home/sumeet291102/projects/project/ipl_project_using_javascript/src/public/output/matches_per_year.json';

        fs.writeFile(output_path, matches_per_year_json, (err) => {
            if (err) {
                console.log(err.message);
                return;
            }
        })
    });




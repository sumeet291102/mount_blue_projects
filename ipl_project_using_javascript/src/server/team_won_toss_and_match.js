// Find the number of times each team won the toss and also won the match

const { parse } = require("csv-parse");
const fs = require("fs");

const path = '/home/sumeet291102/projects/project/ipl_project_using_javascript/src/data/matches.csv';
const matches = [];

function calc(matches) {

    if(matches === undefined) {
        return "Data is undefined";
    }

    let won_toss_and_match = {};

    matches.forEach(match => {
        if (match['toss_winner'] === match['winner']) {
            won_toss_and_match[match['winner']] === undefined ? won_toss_and_match[match['winner']] = 1 : won_toss_and_match[match['winner']]++;
        }
    });

    return won_toss_and_match;
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
        let team_won_toss_and_match = calc(matches);
        let team_won_toss_and_match_json = JSON.stringify(team_won_toss_and_match);
        let output_path = '/home/sumeet291102/projects/project/ipl_project_using_javascript/src/public/output/team_won_toss_and_match.json';

        fs.writeFile(output_path, team_won_toss_and_match_json, (err) => {
            if (err) {
                console.log(err.message);
                return;
            }
        })
    });




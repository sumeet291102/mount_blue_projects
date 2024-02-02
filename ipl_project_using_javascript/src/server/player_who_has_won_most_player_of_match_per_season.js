// Find a player who has won the highest number of Player of the Match awards for each season

const { parse } = require("csv-parse");
const fs = require("fs");

const path = '/home/sumeet291102/projects/project/ipl_project_using_javascript/src/data/matches.csv';
const matches = [];

function calc(matches) {
    let seasons_man_of_the_match = {};

    matches.forEach(match => {
        if (seasons_man_of_the_match[match['season']] === undefined) {
            seasons_man_of_the_match[match['season']] = {};
        }
        seasons_man_of_the_match[match['season']][match['player_of_match']] === undefined ? seasons_man_of_the_match[match['season']][match['player_of_match']] = 1 : seasons_man_of_the_match[match['season']][match['player_of_match']]++;
    });


    for (let season in seasons_man_of_the_match) {
        men_of_the_match_for_season = Object.keys(seasons_man_of_the_match[season]).sort(function (a, b) { return seasons_man_of_the_match[season][a] - seasons_man_of_the_match[season][b] });
        seasons_man_of_the_match[season] = men_of_the_match_for_season[men_of_the_match_for_season.length - 1];
    }

    return seasons_man_of_the_match;
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
        let player_who_won_most_player_of_match_per_season = calc(matches);
        let player_who_won_most_player_of_match_per_season_json = JSON.stringify(player_who_won_most_player_of_match_per_season);
        let output_path = '/home/sumeet291102/projects/project/ipl_project_using_javascript/src/public/output/player_who_won_most_player_of_match_per_season.json';

        fs.writeFile(output_path, player_who_won_most_player_of_match_per_season_json, (err) => {
            if (err) {
                console.log(err.message);
                return;
            }
        })
    });




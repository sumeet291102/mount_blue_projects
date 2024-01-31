# Number of matches won per team per year in IPL

import csv


def Calculate():
    with open("./resources/mock_matches.csv") as csv_obj:
        matches = csv.DictReader(csv_obj)
        seasons_winners = {}
        teams = {}
        for match in matches:
            teams[match['winner']] = teams.get(match['winner'], len(teams))
            seasons_winners[match['season']] = seasons_winners.get(match['season'], {})
            seasons_winners[match['season']][match['winner']] = seasons_winners[match['season']].get(match['winner'], 0) + 1

        seasons_winners_list = []

        for team in teams:
            team_in_seasons = []
            for season in seasons_winners:
                team_in_seasons.append(seasons_winners[season].get(team, 0))
            seasons_winners_list.append(team_in_seasons)

        return seasons_winners


def Execute():
    seasons_winners = Calculate()
    return list(seasons_winners.items())


Execute()

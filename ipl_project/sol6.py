# Number of matches won per team per year in IPL

import csv
import matplotlib.pyplot as plt


def plot(seasons_winners_list, seasons_winners, teams):
    left_arr = len(seasons_winners_list[0])*[0]
    for team in teams:
        plt.barh(list(seasons_winners.keys()), seasons_winners_list[teams[team]], left=left_arr, label=team)
        for i in range(0, len(left_arr)):
            left_arr[i] += seasons_winners_list[teams[team]][i]
    plt.legend()
    plt.show()


def calculate():
    with open("./resources/matches.csv") as csv_obj:
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

        return seasons_winners_list, seasons_winners, teams


def execute():
    seasons_winners_list, seasons_winners, teams = calculate()
    plot(seasons_winners_list, seasons_winners, teams)


execute()

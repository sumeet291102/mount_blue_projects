# Stacked chart of matches played by team by season

import csv
import matplotlib.pyplot as plt


def plot(seasons_list, seasons, teams):
    left_arr = len(seasons_list[0])*[0]
    for team in teams:
        plt.barh(list(seasons.keys()), seasons_list[teams[team]], left=left_arr, label=team)
        for i in range(0, len(left_arr)):
            left_arr[i] += seasons_list[teams[team]][i]
        # plt.barh(pivoted_data.iloc[:, 0], pivoted_data.iloc[:, i], left = np.sum(pivoted_data.iloc[:, 1:i], axis = 1), label=pivoted_data.columns[i], color=colors[i])
    plt.legend()
    plt.show()


def calculate():
    with open("./resources/matches.csv") as csv_obj:
        matches = csv.DictReader(csv_obj)
        seasons = {}
        teams = {}
        for match in matches:
            teams[match['team1']] = teams.get(match['team1'], len(teams))
            teams[match['team2']] = teams.get(match['team2'], len(teams))
            seasons[match['season']] = seasons.get(match['season'], {})
            seasons[match['season']][match['team1']] = seasons[match['season']].get(match['team1'], 0) + 1
            seasons[match['season']][match['team2']] = seasons[match['season']].get(match['team2'], 0) + 1

        seasons_list = []

        for team in teams:
            team_in_seasons = []
            for season in seasons:
                team_in_seasons.append(seasons[season].get(team, 0))
            seasons_list.append(team_in_seasons)

        return seasons_list, seasons, teams


def execute():
    seasons_list, seasons, teams = calculate()
    plot(seasons_list, seasons, teams)


execute()

# Extra runs conceded per team in the year 2016

import csv
import matplotlib.pyplot as plt


def plot(team_extra_runs):
    plt.barh(list(team_extra_runs.keys()), list(team_extra_runs.values()))
    plt.show()


def calculate():
    seasons_index = {}
    with open("./resources/matches.csv") as csv_obj:
        matches = csv.DictReader(csv_obj)
        for match in matches:
            seasons_index[match['id']] = match['season']

    with open("./resources/deliveries.csv") as csv_obj:
        deliveries = csv.DictReader(csv_obj)
        team_extra_runs = {}
        for delivery in deliveries:
            if (seasons_index[delivery['match_id']] != '2016'):
                continue

            team_extra_runs[delivery['bowling_team']] = team_extra_runs.get(delivery['bowling_team'], 0) + int(delivery['extra_runs'])

        return team_extra_runs


def execute():
    team_extra_runs = calculate()
    plot(team_extra_runs)


execute()

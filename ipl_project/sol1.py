# Total runs scored by team

import csv
import matplotlib.pyplot as plt


def plot(team_runs):
    plt.barh(list(team_runs.keys()), list(team_runs.values()))
    plt.show()


def calculate():
    with open("./resources/deliveries.csv") as csv_obj:
        deliveries = csv.DictReader(csv_obj)
        team_runs = {}
        for delivery in deliveries:
            team_runs[delivery['batting_team']] = team_runs.get(delivery['batting_team'], 0) + int(delivery['total_runs'])

        return team_runs


def execute():
    team_runs = calculate()
    plot(team_runs)


execute()

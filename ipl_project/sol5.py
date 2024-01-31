# Number of matches played per year for all the years in IPL

import csv
import matplotlib.pyplot as plt


def plot(matches_played_per_season):
    plt.barh(list(matches_played_per_season.keys()), list(matches_played_per_season.values()))
    plt.show()


def calculate():
    with open("./resources/matches.csv") as csv_obj:
        matches = csv.DictReader(csv_obj)
        matches_played_per_season = {}
        for match in matches:
            matches_played_per_season[match['season']] = matches_played_per_season.get(match['season'], 0) + 1

    return matches_played_per_season


def execute():
    matches_played_per_season = calculate()
    plot(matches_played_per_season)


execute()

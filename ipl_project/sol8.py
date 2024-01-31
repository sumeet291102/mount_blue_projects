# Top 10 economical bowlers in the year 2015

import csv
import matplotlib.pyplot as plt


def plot(bowler_economy):
    plt.barh(list(bowler_economy.keys())[:10], list(bowler_economy.values())[:10])
    plt.show()


def calculate():
    seasons_index = {}
    with open("./resources/matches.csv") as csv_obj:
        matches = csv.DictReader(csv_obj)
        for match in matches:
            seasons_index[match['id']] = match['season']

    with open("./resources/deliveries.csv") as csv_obj:
        deliveries = csv.DictReader(csv_obj)
        bowler_runs_per_over = {}
        for delivery in deliveries:
            if (seasons_index[delivery['match_id']] != '2015'):
                continue

            bowler_runs_per_over[f"{delivery['bowler']},{delivery['match_id']},{delivery['over']}"] = bowler_runs_per_over.get(f"{delivery['bowler']},{delivery['match_id']},{delivery['over']}", 0) + int(delivery['total_runs'])

        bowler_runs_per_over_dict = {}
        for bowler in bowler_runs_per_over:
            if (bowler.split(',')[0] not in bowler_runs_per_over_dict):
                bowler_runs_per_over_dict[bowler.split(',')[0]] = []
            bowler_runs_per_over_dict[bowler.split(',')[0]].append(bowler_runs_per_over[bowler])

        bowler_economy = {}
        for bowler in bowler_runs_per_over_dict:
            runs = 0
            for run in bowler_runs_per_over_dict[bowler]:
                runs += run
            bowler_economy[bowler] = runs/len(bowler_runs_per_over_dict[bowler])

        bowler_economy = dict(sorted(bowler_economy.items(), key=lambda x: x[1]))
        return bowler_economy


def execute():
    bowler_economy = calculate()
    plot(bowler_economy)


execute()

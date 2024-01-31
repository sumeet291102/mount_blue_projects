# Number of matches played per year for all the years in IPL

import csv


def Calculate():
    with open("./resources/mock_matches.csv") as csv_obj:
        matches = csv.DictReader(csv_obj)
        matches_played_per_season = {}
        for match in matches:
            matches_played_per_season[match['season']] = matches_played_per_season.get(match['season'], 0) + 1

    return matches_played_per_season


def Execute():
    matches_played_per_season = Calculate()
    return list(matches_played_per_season.items())


Execute()

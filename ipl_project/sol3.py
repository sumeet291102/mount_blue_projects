# Foreign umpire analysis

import csv
import matplotlib.pyplot as plt


def plot(countries):
    plt.barh(list(countries.keys()), list(countries.values()))
    plt.show()


def calculate():
    with open("./resources/umpires.csv") as csv_obj:
        umpires = csv.DictReader(csv_obj)
        countries = {}
        for umpire in umpires:
            if umpire[' country'] == ' India':
                continue

            countries[umpire[' country']] = countries.get(umpire[' country'], 0) + 1

        return countries


def execute():
    countries = calculate()
    plot(countries)


execute()

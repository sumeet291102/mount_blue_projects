# Top batsman for Royal Challengers Bangalore

import csv
import matplotlib.pyplot as plt


def plot(rcb_batsman):
    plt.barh(list(rcb_batsman.keys())[0:11], list(rcb_batsman.values())[0:11])
    plt.show()


def calculate():
    with open("./resources/deliveries.csv") as csv_obj:
        deliveries = csv.DictReader(csv_obj)
        deliveries_of_rcb = []

        for delivery in deliveries:
            if (delivery['batting_team'] == 'Royal Challengers Bangalore'):
                deliveries_of_rcb.append(delivery)

        rcb_batsman = {}
        for rcb_delivery in deliveries_of_rcb:
            rcb_batsman[rcb_delivery['batsman']] = rcb_batsman.get(rcb_delivery['batsman'], 0) + int(rcb_delivery['batsman_runs'])

        rcb_batsman = dict(sorted(rcb_batsman.items(), key=lambda x: x[1], reverse=True))

        return rcb_batsman


def execute():
    rcb_batsman = calculate()
    plot(rcb_batsman)


execute()

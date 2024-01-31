import csv
import matplotlib.pyplot as plt

# un_data_for_India=un_data[un_data['Region']=='India']
# plt.barh(un_data_for_India['Year'],un_data_for_India['Population'])

india_population_over_years = {}

with open('./resources/population-estimates.csv') as file_obj:
    countries = csv.DictReader(file_obj)

    for country in countries:
        if country['Region'] != 'India':
            continue

        india_population_over_years[country['Year']] = india_population_over_years.get(country['Year'], 0) + float(country['Population'])

plt.barh(list(india_population_over_years.keys()), list(india_population_over_years.values()))
plt.show()
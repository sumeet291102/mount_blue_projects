import data_analyser
import data_extractor


class Calculator:

    def __init__(self, url, label_index, min_index, max_index):
        data = data_extractor.Data_extractor().data_processing(url)
        print(data_analyser.Data_analyser().find_minimum_index(data, label_index, min_index, max_index))

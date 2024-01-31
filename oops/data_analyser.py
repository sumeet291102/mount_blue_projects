import sys


class Data_analyser:

    def find_minimum_index(self, data_lst, label_index, min_index, max_index):
        min_value = sys.maxsize
        label_index_value = ""
        for row in range(1, len(data_lst)):
            if (abs(float(data_lst[row][max_index]) - float(data_lst[row][min_index])) < min_value):
                min_value = abs(float(data_lst[row][max_index]) - float(data_lst[row][min_index]))
                label_index_value = data_lst[row][label_index]
        return label_index_value

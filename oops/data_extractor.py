class Data_extractor:

    def data_processing(self, url):
        data_lst = []
        with open(url) as file_handle:
            for row in file_handle:
                tmp_lst = []
                for word in row.split():
                    tmp_lst.append(word.strip('*,. '))
                if 0 <= len(tmp_lst) <= 1:
                    continue
                else:
                    data_lst.append(tmp_lst)
        return data_lst

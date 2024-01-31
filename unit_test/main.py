import unittest
from sol1 import Execute as matches_played_per_season
from sol2 import Execute as matches_won_by_team_per_season
from sol3 import Execute as extra_runs_conceded_per_team_in_2016
from sol4 import Execute as top_10_economical_bowlers_in_2015


class Ipl_data_set_unitTesting(unittest.TestCase):

    def test_matches_played_per_season(self):
        expected_data = [('2017', 5)]
        self.assertEqual(matches_played_per_season(), expected_data)

    def test_matches_won_by_team_per_season(self):
        expected_data = [('2017', {'Sunrisers Hyderabad': 1, 'Rising Pune Supergiant': 1, 'Kolkata Knight Riders': 1, 'Kings XI Punjab': 1, 'Royal Challengers Bangalore': 1})]
        self.assertEqual(matches_won_by_team_per_season(), expected_data)

    def test_extra_runs_conceded_per_team_in_2016(self):
        expected_data = []
        self.assertEqual(extra_runs_conceded_per_team_in_2016(), expected_data)

    def test_top_10_economical_bowlers_in_2015(self):
        expected_data = []
        self.assertEqual(top_10_economical_bowlers_in_2015(), expected_data)


if __name__ == '__main__':
    unittest.main()

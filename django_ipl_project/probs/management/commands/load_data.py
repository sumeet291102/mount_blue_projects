from django.core.management.base import BaseCommand, CommandError
from probs.models import Match, Delivery
import csv


class Command(BaseCommand):
    help = "loads data into table"

    def handle(self, *args, **options):
        matches_path = './matches.csv'
        matches_arr = []
        with open(matches_path, 'r') as file:
            matches = csv.DictReader(file)
            Match.objects.all().delete()
            for match in matches:
                new_match = Match(
                    season=int(match['season']),
                    city=match['city'],
                    date=match['date'],
                    team1=match['team1'],
                    team2=match['team2'],
                    toss_winner=match['toss_winner'],
                    toss_decision=match['toss_decision'],
                    result=match['result'],
                    dl_applied=int(match['dl_applied']),
                    winner=match['winner'],
                    win_by_runs=int(match['win_by_runs']),
                    win_by_wickets=int(match['win_by_wickets']),
                    player_of_match=match['player_of_match'],
                    venue=match['venue'],
                )
                matches_arr.append(new_match)
                new_match.save()

        deliveries_path = './deliveries.csv'
        with open(deliveries_path, 'r') as csv_file:
            deliveries = csv.DictReader(csv_file)
            Delivery.objects.all().delete()
            for delivery in deliveries:
                new_delivery = Delivery(
                    match_id=matches_arr[int(delivery['match_id'])-1],
                    inning=int(delivery['inning']),
                    batting_team=delivery['batting_team'],
                    bowling_team=delivery['bowling_team'],
                    over=int(delivery['over']),
                    ball=int(delivery['ball']),
                    batsman=delivery['batsman'],
                    non_striker=delivery['non_striker'],
                    bowler=delivery['bowler'],
                    is_super_over=int(delivery['is_super_over']),
                    wide_runs=int(delivery['wide_runs']),
                    bye_runs=int(delivery['bye_runs']),
                    legbye_runs=int(delivery['legbye_runs']),
                    noball_runs=int(delivery['noball_runs']),
                    penalty_runs=int(delivery['penalty_runs']),
                    batsman_runs=int(delivery['batsman_runs']),
                    extra_runs=int(delivery['extra_runs']),
                    total_runs=int(delivery['total_runs']),
                    player_dismissed=delivery['player_dismissed'],
                    dismissal_kind=delivery['dismissal_kind'],
                    fielder=delivery['fielder'],
                )
                new_delivery.save()


# select bowler, avg(a) from (select bowler, match_id, over, sum(total_runs - legby - by) as a) as b;
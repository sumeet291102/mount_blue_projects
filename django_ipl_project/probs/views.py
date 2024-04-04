from django.shortcuts import render
import json
from django.db.models import Count, Sum, F
from django.http import HttpResponse, JsonResponse
from probs.models import Match, Delivery

# Create your views here.


def index(request):
    # return render(request, 'base.html')
    return HttpResponse('hi')


# Number of matches played per year for all the years in IPL.
def calc_matches_per_year():
    matches_per_year = Match.objects.values('season').annotate(
        matches_count=Count('season')
    )
    # return JsonResponse(list(matches_per_year), safe=False)
    return matches_per_year


# Number of matches won per team per year in IPL.
def calc_matches_won_per_year_per_team():
    matches_won_per_year_per_team = Match.objects.values('season', 'winner').annotate(
        matches_won=Count('winner')
    )
    return matches_won_per_year_per_team


# Extra runs conceded per team in the year 2016
def calc_extra_runs():
    extra_runs_per_team_in_2016 = Delivery.objects.filter(
        match_id__season=2016).values('bowling_team'
    ).annotate(
        extra_runs=Sum('extra_runs')
    )
    return extra_runs_per_team_in_2016


# Top 10 economical bowlers in the year 2015
def calc_economical_bowlers():
    economy_of_bowlers_in_2015 = Delivery.objects.filter(
        match_id__season=2015
    ).values('bowler').annotate(
        economy=6.0*Sum(F('total_runs')-F('legbye_runs')-F('bye_runs')) /
        Count('bowler', filter=(F('wide_runs')+F('noball_runs') == 0))
    ).order_by('economy').values('bowler', 'economy')[:10]

    return economy_of_bowlers_in_2015

def economical_bowlers(request):
    return HttpResponse(calc_economical_bowlers())

def extra_runs(request):
    return HttpResponse(calc_extra_runs())

def matches_per_year(request):
    return HttpResponse(calc_matches_per_year())

def matches_won_per_year_per_team(request):
    return HttpResponse(calc_matches_won_per_year_per_team())

# CHARTS
def matches_per_year_chart(request):
    chart_data = calc_matches_per_year()
    return render(request, 'probs/matches_per_year.html', {'chart_data': chart_data})


def matches_won_per_year_per_team_chart(request):
    matches_won_per_team = calc_matches_won_per_year_per_team()

    chart_data = {}
    for match in matches_won_per_team:
        season = match["season"]
        winner = match["winner"]
        matches_won_data = match["matches_won"]

        if season not in chart_data:
            chart_data[season] = {}

        chart_data[season][winner] = matches_won_data


    return render(request, 'probs/matches_won_per_team_per_year.html', {'chart_data': chart_data})


def extra_runs_chart(request):
    chart_data = calc_extra_runs()
    return render(request, 'probs/extra_runs_2016.html', {'chart_data': chart_data})


def economical_bowlers_chart(request):
    chart_data = calc_economical_bowlers()
    return render(request, 'probs/economical_bowlers_2015.html', {'chart_data': chart_data})

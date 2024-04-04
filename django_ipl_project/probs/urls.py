from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("matches_count/", views.matches_per_year, name="matches_count"),
    path("matches_won/", views.matches_won_per_year_per_team, name="matches_won"),
    path("extra_runs/", views.extra_runs, name="extra_runs"),
    path("economical_bowlers/", views.economical_bowlers, name="economical_bowlers"),
    path("matches_count_chart/", views.matches_per_year_chart, name="matches_count_chart"),
    path("matches_won_chart/", views.matches_won_per_year_per_team_chart, name="matches_won_chart"),
    path("extra_runs_chart/", views.extra_runs_chart, name="extra_runs_chart"),
    path("economical_bowlers_chart/", views.economical_bowlers_chart, name="economical_bowlers_chart"),
]

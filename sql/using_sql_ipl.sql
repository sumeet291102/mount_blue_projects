create table if not exists ipl_matches (
             id int  PRIMARY KEY,
             season int,
             city text,
             date_T date,
             team1 text,
             team2 text,
             toss_winner text,
             toss_decision text,
             result text,
             dl_applied int,
             winner text,
             win_by_runs int,
             win_by_wickets int,
             player_of_match text,
             venue text,
             umpire1 text,
             umpire2 text,
             umpire3 text
         );



CREATE TABLE if not exists ipl_deliveries(
    match_id int,
    inning int,
    batting_team text,
    bowling_team text,
    over int,
    ball int,
    batsman text,
    non_striker text,
    bowler text,
    is_super_over int,
    wide_runs int,
    bye_runs int,
    legbye_runs int,
    noball_runs int,
    penalty_runs int,
    batsman_runs int,
    extra_runs int,
    total_runs int,
    player_dismissed text,
    dismissal_kind text,
    fielder text
);

CREATE TABLE if not exists ipl_umpires(
    umpire text,
    country text
);

-- \copy ipl_umpires from '/home/sumeet291102/projects/python_project/ipl_project/resources/umpires.csv' CSV HEADER;
-- \copy ipl_deliveries from '/home/sumeet291102/projects/python_project/ipl_project/resources/deliveries.csv' CSV HEADER;
-- \copy ipl_matches from '/home/sumeet291102/projects/python_project/ipl_project/resources/matches.csv' CSV HEADER;


-- select * from ipl_matches;
-- select * from ipl_deliveries;
-- select * from ipl_umpire

-- Total runs scored by team

select batting_team, sum(total_runs) total_runs from ipl_deliveries
    group by batting_team;

-- Top batsman for Royal Challengers Bangalore

select batsman, sum(batsman_runs) as total_batsman_run from ipl_deliveries
    where batting_team = 'Royal Challengers Bangalore'
        group by batsman
            order by total_batsman_run desc
                limit 10;

-- Foreign umpire analysis

select country, count(country) as count from umpires_data
    where country != ' India'
        group by country;

-- Stacked chart of matches played by team by season

select season, team, count(team) as matches_played_per_season from (

    select team1 as teamp from ipl_matches

    union 

    select team2 as team from ipl_matches

) group by season, team;

-- Number of matches played per year for all the years in IPL.

select season, count(season) as matches_played from ipl_matches
    group by season;

-- Number of matches won per team per year in IPL.

select season, winner, count(winner) from ipl_matches
    group by season, winner;

-- Extra runs conceded per team in the year 2016

select bowling_team, sum(extra_runs) as extra_runs_conceded from ipl_deliveries
    inner join ipl_matches on match_id = id
        where season = 2016
            group by bowling_team;

-- Top 10 economical bowlers in the year 2015

select bowler, avg(total_runs) as economy from ipl_deliveries
    inner join ipl_matches on match_id = id
        where season = 2015
            group by over, bowler
                order by economy 
                    limit 10;
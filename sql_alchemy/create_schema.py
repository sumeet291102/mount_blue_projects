from sqlalchemy import create_engine, Column, Integer, String, Date, ForeignKey
from sqlalchemy.orm import declarative_base, relationship


Base = declarative_base()

# Class to create 'matches' table


class Match(Base):
    __tablename__ = 'matches'

    id = Column(Integer, primary_key=True)
    season = Column(Integer)
    city = Column(String)
    date = Column(Date)
    team1 = Column(String)
    team2 = Column(String)
    toss_winner = Column(String)
    toss_decision = Column(String)
    result = Column(String)
    dl_applied = Column(Integer)
    winner = Column(String)
    win_by_runs = Column(Integer)
    win_by_wickets = Column(Integer)
    player_of_match = Column(String)
    venue = Column(String)
    umpire1 = Column(String)
    umpire2 = Column(String)
    umpire3 = Column(String)

    deliveries = relationship("Delivery", back_populates="match")

    def __init__(self, id, season, city, date, team1, team2, toss_winner, toss_decision, result, dl_applied, winner, win_by_runs, win_by_wickets, player_of_match, venue, umpire1, umpire2, umpire3):
        self.id = id
        self.season = season
        self.city = city
        self.date = date
        self.team1 = team1
        self.team2 = team2
        self.toss_winner = toss_winner
        self.toss_decision = toss_decision
        self.result = result
        self.dl_applied = dl_applied
        self.winner = winner
        self.win_by_runs = win_by_runs
        self.win_by_wickets = win_by_wickets
        self.player_of_match = player_of_match
        self.venue = venue
        self.umpire1 = umpire1
        self.umpire2 = umpire2
        self.umpire3 = umpire3


# Class to create 'deliveries' table


class Delivery(Base):
    __tablename__ = 'deliveries'
    id = Column(Integer, autoincrement=True, primary_key=True)
    match_id = Column(Integer, ForeignKey('matches.id'))
    inning = Column(Integer, primary_key=True)
    batting_team = Column(String)
    bowling_team = Column(String)
    over = Column(Integer)
    ball = Column(Integer)
    batsman = Column(String)
    non_striker = Column(String)
    bowler = Column(String)
    is_super_over = Column(Integer)
    wide_runs = Column(Integer)
    bye_runs = Column(Integer)
    legbye_runs = Column(Integer)
    noball_runs = Column(Integer)
    penalty_runs = Column(Integer)
    batsman_runs = Column(Integer)
    extra_runs = Column(Integer)
    total_runs = Column(Integer)
    player_dismissed = Column(String)
    dismissal_kind = Column(String)
    fielder = Column(String)

    match = relationship("Match", back_populates="deliveries")

    def __init__(self, id, match_id, inning, batting_team, bowling_team, over, ball, batsman, non_striker, bowler, is_super_over, wide_runs, bye_runs, legbye_runs, noball_runs, penalty_runs, batsman_runs, extra_runs, total_runs, player_dismissed, dismissal_kind, fielder):
        self.id = id
        self.match_id = match_id
        self.inning = inning
        self.batting_team = batting_team
        self.bowling_team = bowling_team
        self.over = over
        self.ball = ball
        self.batsman = batsman
        self.non_striker = non_striker
        self.bowler = bowler
        self.is_super_over = is_super_over
        self.wide_runs = wide_runs
        self.bye_runs = bye_runs
        self.legbye_runs = legbye_runs
        self.noball_runs = noball_runs
        self.penalty_runs = penalty_runs
        self.batsman_runs = batsman_runs
        self.extra_runs = extra_runs
        self.total_runs = total_runs
        self.player_dismissed = player_dismissed
        self.dismissal_kind = dismissal_kind
        self.fielder = fielder


# Class to create 'Umpires' table


class Umpire(Base):
    __tablename__ = 'Umpire'

    id = Column(Integer, autoincrement=True, primary_key=True)
    umpire = Column(String)
    country = Column(String)

    def __init__(self, id, umpire, country):
        self.id = id
        self.umpire = umpire
        self.country = country

# Create the SQLAlchemy engine


USERNAME = "sumeet291102"
PASSWORD = "123789"
PORT = "5432"
DATABASE_NAME = "test_db"

Engine = create_engine(
    f"postgresql://{USERNAME}:{PASSWORD}@localhost:{PORT}/{DATABASE_NAME}",
    echo=True
)


# Create tables in the database
Base.metadata.create_all(Engine)

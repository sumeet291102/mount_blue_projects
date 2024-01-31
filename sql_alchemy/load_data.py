from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
import csv

USERNAME = "sumeet291102"
PASSWORD = "123789"
PORT = "5432"
DATABASE_NAME = "test_db"

Engine = create_engine(
    f"postgresql://{USERNAME}:{PASSWORD}@localhost:{PORT}/{DATABASE_NAME}",
    echo=True
)

Session = sessionmaker(bind=Engine)
session = Session()

# Umpire('u', 'h', 'o')
session.

# with open(".resources/deliveries.csv") as csv_obj:
#     deliveries = csv.DictReader(csv_obj)
#     for delivery in deliveries:
#         print(delivery.values())

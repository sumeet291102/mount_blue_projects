from sqlalchemy import create_engine
from sqlalchemy_utils import create_database

username = 'sumeet291102'
password = '123789'
database_name = 'test_db'
database_url = f'postgresql://{username}:{password}@localhost:5432/{database_name}'

def create_new_database(database_url):
    engine = create_engine(database_url, echo=True)
    create_database(engine.url)
    print("Database created successfully!")


if __name__ == "__main__":
    create_new_database(database_url)

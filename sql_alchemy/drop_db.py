from sqlalchemy import create_engine
from sqlalchemy_utils import drop_database


username = 'sumeet291102'
password = '123789'
database_name = 'test_db'
database_url = f'postgresql://{username}:{password}@localhost:5432/{database_name}'


def delete_database(database_url):
    engine = create_engine(database_url, echo=True)

    drop_database(engine.url)
    print("Database deleted successfully!")


if __name__ == "__main__":
    delete_database(database_url)

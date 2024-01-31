Company Master - Maharashtra
Aim

To convert raw open data into plots, that tell a story on the state of company registration in Maharashtra.
raw data
Name 	source
Company master data of Maharashtra 	https://data.gov.in/catalog/company-master-data
Instructions

    Download all the data needed. Consult your mentor if you have any problems accessing the raw data.
    Initialize a python project with a separate virtualenv. All your code should be in Python.
    Important: flake8 should not throw any errors.
    This project should have a separate repo on Gitlab.com.
    All projects should have README.md with instructions on how to run this project.

What your program should do

From the CSV and other source files specified above, write python code to ...

    Read in the data.
    Write logic to slice / dice / accumulate / transform the data.
    Using matplotlib plot the plots specified in the following section.

Problems
1. Histogram of Authorized Cap

Plot a histogram on the "Authorized Capital" (column: AUTHORIZED_CAP) with the following intervals

    <= 1L
    1L to 10L
    10L to 1Cr
    1Cr to 10Cr
    > 10Cr

Note:

    The x-axis labels should be strings listed above, like "<= 1L".
    You will have to adjust the intervals if you have an un-balanced plot.

2. Bar Plot of company registration by year

From the column, DATE_OF_REGISTRATION parse out the registration year. Using this data, plot a bar plot of the number of company registrations, vs. year.
3. Company registration in the year 2015 by the district.

The district can be found by zip code. This resource has that data. Before you start on this problem please make a CSV of zip code vs. district.

In this exercise ...

    Only consider registrations for the year 2015.
    Find out the district of registration by the zip code. The zip code can be found at the end of the address column.
    Count the registration by the district.
    Plot a "Bar plot" of "Number of Registration" vs. district.
    If the plot is unbalanced consider plotting only the top districts.

4. Grouped Bar Plot.

Plot a Grouped Bar Plot by aggregating registration counts over ...

    Year of registration
    Principal Business Activity

Plot only top 5 Prinicipal Business Activity for last 10 years

An example of a Grouped Bar Plot is here
// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

function get_cars_older_than_2000(year_of_cars) {

    if(year_of_cars === undefined) {
        return 'inventory is undefined';
    }

    let cars_older_than_2000 = year_of_cars.filter((car_year) => {
        return (car_year < 2000)
    })

    return cars_older_than_2000;
}

module.exports = get_cars_older_than_2000;
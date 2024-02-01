const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code.
let filter = require('../filter.js');

console.log(filter(items, (element) => {
    return element === 5;
}))
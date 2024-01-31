const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code.
let map = require('./map.js');

map(items, (element) => {
    return element*2;
})
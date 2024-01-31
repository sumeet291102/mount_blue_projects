const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code.
let reduce = require('./reduce.js');

reduce(items, (res, element) => {
    return res+element;
})
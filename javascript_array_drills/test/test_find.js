const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code.
let find = require('../find.js');

console.log(find(items, (element) => {
    return element === 8;
}))
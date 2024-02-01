const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; // use this object to test your functions
let defaults = require('../defaults.js');

console.log(defaults(testObject, {'hero_name': 'batman'}));

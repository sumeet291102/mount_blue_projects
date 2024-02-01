const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; // use this object to test your functions
map_object = require('../map_object.js');

console.log(map_object(testObject, (value) => {
    return value + ' batman';
}))
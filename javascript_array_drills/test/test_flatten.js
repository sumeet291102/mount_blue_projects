const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'
let flatten = require('../flatten.js');

console.log(flatten(nestedArray));
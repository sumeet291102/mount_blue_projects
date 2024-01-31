const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' }; // use this object to test your functions

// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.
// Check and use MDN as well

/*
    Create a function for each problem in a file called
        keys.js
        values.js
        pairs.js
    and so on in the root of the project.

    Ensure that the functions in each file is exported and tested in its own file called
        testKeys.js
        testValues.js
        testPairs.js
    and so on in a folder called test.

    Create a new git repo on gitlab for this project, ensure that you commit after you complete each problem in the project.
    Ensure that the repo is a public repo.

    When you are done, send the gitlab url to your mentor
*/

// function keys(obj) {
//     let arr = []
//     for(let key in obj) {
//         arr.push(key);
//     }

//     console.log(arr);
// }

// keys(testObject);

// function values(obj) {
//     let array = [];
//     for(let key in obj) {
//         array.push(obj[key]);
//     }
// }
// values(testObject);


// function mapObject(obj, callback) {
//     for(let key in obj) {
//         obj[key] = callback(obj[key]);
//     }
// }

// mapObject(testObject, (value) => {
//     return value + ' batman';
// })


// function pairs(obj) {
//     // Convert an object into a list of [key, value] pairs.
//     // http://underscorejs.org/#pairs
//     let arr = [];
//     for(let key in obj) {
//         let tmp_arr = [];
//         tmp_arr.push(key);
//         tmp_arr.push(obj[key]);
//         arr.push(tmp_arr);
//     }
//     return arr;
// }

// console.log(pairs(testObject))

/* STRETCH PROBLEMS */

// function invert(obj) {
//     // Returns a copy of the object where the keys have become the values and the values the keys.
//     // Assume that all of the object's values will be unique and string serializable.
//     // http://underscorejs.org/#invert
//     let inverted_obj = {};
//     for(let key in obj) {
//         inverted_obj[obj[key]] = key;
//     }
//     return inverted_obj;
// }

// console.log(invert(testObject));

// function defaults(obj, defaultProps) {
//     for(let key in defaultProps) {
//         if(key in obj) {}
//         else {
//             obj[key] = defaultProps[key];
//         }
//     }
// }

// defaults(testObject, {'hero_name': 'batman'});
// console.log(testObject);

let s = "niti122,,p.ntin!  @3";

// console.log(s.replace([',','.'], ''));
s.replace()
// console.log(s)


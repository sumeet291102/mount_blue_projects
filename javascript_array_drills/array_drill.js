const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code.

function each(elements, callback) {

    for(let i = 0; i < elements.length; i++) {
        callback(elements[i], i);
    }
}

each(items, (element) => {
    console.log(element);
})


function map(elements, callback) {
    for(let i = 0; i < elements.length; i++) {
        elements[i] = callback(elements[i], i);
        console.log(elements[i]);
    }
}

map(items, (element, idx) => {
    return element*2;
})


function reduce(elements, callback, starting_value) {
    let starting_idx = 0;
    if(starting_value === undefined) {
        starting_value = elements[0];
        starting_idx = 1;
    }

    for(let i = starting_idx; i < elements.length; i++) {
        starting_value = callback(starting_value, elements[i]);
    }

    console.log(starting_value);
}

reduce(items, (res, element) => {
    return res+element;
})

function find(elements, callback) {

    for(let i = 0; i < elements.length; i++) {
        if(callback(elements[i])) return elements[i]; 
    }

}

console.log(find(items, (element) => {
    return element === 5;
}))

function filter(elements, callback) {
    filtered_elements = []

    for(let i = 0; i < elements.length; i++) {
        if(callback(elements[i])) filtered_elements.push(elements[i]);
    }

    return filtered_elements;
}

filter(items, (element) => {
    return element === 5;
})

const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'

function flatten(elements) {
    let arr = [];

    for(let i = 0; i < elements.length; i++) {
        // console.log(typeof elements[i]);
        if(typeof elements[i] === 'object') {
            flatted_arr = flatten(elements[i]);
            for(let j = 0; j < flatted_arr.length; j++) {
                arr.push(flatted_arr[j]);
            }
        }
        else {
            arr.push(elements[i]);
        }
    }

    return arr;
}
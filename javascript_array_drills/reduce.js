function reduce(elements, callback, starting_value) {

    if(typeof elements !== 'object' || typeof callback !== 'function') {
        console.log('not an array or no callback function');
        return;
    }

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

module.exports = reduce;
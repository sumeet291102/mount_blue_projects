function flatten(elements) {
    let arr = [];

    if(elements === undefined || typeof elements !== 'object') {
        console.log('not an array');
        return;
    }

    for(let i = 0; i < elements.length; i++) {
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

module.exports = flatten;
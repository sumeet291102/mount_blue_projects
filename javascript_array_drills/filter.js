function filter(elements, callback) {

    if(typeof elements !== 'object' || typeof callback !== 'function') {
        console.log('not an array or no callback function');
        return;
    }

    filtered_elements = []

    for(let i = 0; i < elements.length; i++) {
        if(callback(elements[i])) filtered_elements.push(elements[i]);
    }

    return filtered_elements;
}

module.exports = filter;
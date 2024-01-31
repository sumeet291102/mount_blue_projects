function map(elements, callback) {

    if(typeof elements !== 'object' || typeof callback !== 'function') {
        console.log('not an array or no callback function');
        return;
    }

    for(let i = 0; i < elements.length; i++) {
        elements[i] = callback(elements[i], i);
        console.log(elements[i]);
    }
}

module.exports = map;
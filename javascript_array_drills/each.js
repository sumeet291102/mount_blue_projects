function each(elements, callback) {

    if(typeof elements !== 'object' || typeof callback !== 'function') {
        console.log('not an array or no callback function');
        return;
    }

    for(let i = 0; i < elements.length; i++) {
        callback(elements[i], i);
    }
}

module.exports = each;
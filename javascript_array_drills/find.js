function find(elements, callback) {

    if(typeof elements !== 'object' || typeof callback !== 'function') {
        console.log('not an array or no callback function');
        return;
    }

    for(let i = 0; i < elements.length; i++) {
        if(callback(elements[i])) return elements[i]; 
    }

    return 'element not found';
}

module.exports = find;
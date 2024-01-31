function invert(obj) {

    if(typeof obj !== 'object') {
        return 'not an object';
    }

    let inverted_obj = {};
    for(let key in obj) {
        inverted_obj[obj[key]] = key;
    }
    return inverted_obj;
}

module.exports = invert;
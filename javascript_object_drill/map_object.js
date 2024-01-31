function map_object(obj, callback) {

    if(typeof obj !== 'object') {
        return 'not an object';
    }

    for(let key in obj) {
        obj[key] = callback(obj[key]);
    }

    return obj;
}

module.exports = map_object;
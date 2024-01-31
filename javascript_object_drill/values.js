function values(obj) {

    if(typeof obj !== 'object') {
        return 'not an object';
    }

    let array = [];
    for(let key in obj) {
        array.push(obj[key]);
    }

    return array;
}

module.exports = values;
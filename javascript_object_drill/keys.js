function keys(obj) {

    if(typeof obj !== 'object') {
        return 'not an object';
    }

    let arr = []
    for(let key in obj) {
        arr.push(key);
    }

    return arr;
}

module.exports = keys;
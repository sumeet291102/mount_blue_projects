function pairs(obj) {

    if(typeof obj !== 'object') {
        return 'not an object';
    }

    let arr = [];
    for(let key in obj) {
        let tmp_arr = [];
        tmp_arr.push(key);
        tmp_arr.push(obj[key]);
        arr.push(tmp_arr);
    }
    return arr;
}

module.exports = pairs;
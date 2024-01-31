function defaults(obj, defaultProps) {
    for(let key in defaultProps) {
        if(key in obj) {}
        else {
            obj[key] = defaultProps[key];
        }
    }

    return obj;
}

module.exports = defaults;
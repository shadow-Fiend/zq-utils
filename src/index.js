const _each = (obj, cb) => {
    let i = 0,
        len = obj.length,
        isArray = Array.isArray(obj)
    if(isArray) {
        for(; i < len; i++) {
            cb(obj[i], i)
        }
    } else {
        for(i in obj) {
            cb(obj[i], i)
        }
    }
}


module.exports = {
    _each
}
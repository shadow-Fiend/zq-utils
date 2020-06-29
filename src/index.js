const _each = (obj, cb) => {
    let value,
        i = 0,
        len = obj.length,
        isArray = Array.isArray(obj)
    if(isArray) {
        for(; i < len; i++) {
            value = cb.call(obj[i], obj[i], i)
        }
    } else {
        for(i in obj) {
            value = cb.call(obj[i], obj[i], i)
        }
    }
}


module.exports = {
    _each
}
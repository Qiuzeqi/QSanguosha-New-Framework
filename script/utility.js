.pragma library

Array.prototype.contains = function(element) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === element)
            return true;
    }
    return false;
}
Array.prototype.removeOne = function(element){
    var result = [];
    for (var i = 0; i < this.length; i++) {
        if (this[i] === element)
            continue;
        result.push(this[i]);
    }
    return result;
}

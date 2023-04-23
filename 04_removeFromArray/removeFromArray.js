const removeFromArray = function(array, ...remove) {
    return array.filter(x => !remove.includes(x))
};

// Do not edit below this line
module.exports = removeFromArray;

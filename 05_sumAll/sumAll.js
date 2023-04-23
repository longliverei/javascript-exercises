const sumAll = function(a, b) {
    if ( a < 0 || b < 0) return "ERROR";
    if (typeof(a) != "number" || typeof(b) != "number") return "ERROR";

    let argsSum = a + b;
    let gauss = 0;

    a > b ? gauss = a / 2 : gauss = b / 2;

    let res = argsSum * gauss;

    return res;
};

// Do not edit below this line
module.exports = sumAll;

const fibonacci = function(num) {
    if (num < 1) return "OOPS";
    let i = 2;
    let n = parseInt(num);
    let fib = new Array();
    fib[0] = 0;
    fib[1] = 1;

    for (i; i <= n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }

    return fib[n];
};

// Do not edit below this line
module.exports = fibonacci;

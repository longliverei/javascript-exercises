const palindromes = function (str) {
    let newStr = str.replace(/[^\w\s\']|_/g, "")
                .replace(/\s+/g, "");

    let res = newStr.toLowerCase();
    let len = res.length - 1;

    for (let i = 0; i < res.length; i++) {
        if (res[i] != res[len--]) return false;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;

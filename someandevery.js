// first
function hasOddNumber(arr) {
    return arr.some(function (num) {
        return num % 2 !== 0;
    });
};

//second
function hasAZero(num) {
    return num.toString().split('').some(function (val) {
        return val === '0';
    });
}

//third
function hasOnlyOddNumbers(arr) {
    return arr.every(function (val) {
        return val % 2 !== 0;
    });
}

//fourth
function hasNoDuplicates(arr) {
    return arr.every(function (val) {
        return arr.indexOf(val) === arr.lastIndexOf(val);
    });
}

//fifth
function hasCertainKey(arr, key) {
    return arr.every(function (val) {
        return key in val;
    });
}

//sixth
function hasCertainValue(arr, key, searchValue) {
    return arr.every(function (val) {
        return val[key] === searchValue;
    });
}
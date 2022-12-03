export const factorialR = (num) => {
    if (isNaN(num)) {
        throw new RangeError('Not numeric valid input');
    }
    if (num < 0) {
        throw new RangeError('Negative not valid input');
    }
    if (num !== Math.trunc(num)) {
        throw new RangeError('Negative not valid input');
    }
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorial(num - 1);
};

export const factorial = (num) => {
    if (isNaN(num)) {
        throw new RangeError('Not numeric valid input');
    }
    if (num < 0) {
        throw new RangeError('Negative not valid input');
    }
    if (num !== Math.trunc(num)) {
        throw new RangeError('Negative not valid input');
    }
    let r = 1;
    for (let i = 1; i <= num; i++) {
        r *= i;
    }
    return r;
};

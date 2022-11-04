// Calculo del factorial de un número Natural (entero positivo)

const isNaturalNumber = (n) => {
    if (n < 0) throw new RangeError('No válido');
    if (n !== Math.trunc(n)) throw new RangeError('No válido');
};

export const factorial = (n) => {
    isNaturalNumber(n);
    let r = 1;
    for (let i = 1; i <= n; i++) {
        r *= i;
    }
    return r;
};

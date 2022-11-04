import { factorial } from './factorial.js';

// Test del Calculo del factorial de un número Natural (entero positivo)
// 0 -> 1
// 1 -> 1
// 5 -> 120
// 10 -> 3.628.800
// 450 -> Infinity

// -1
// 1.2

const cases = [
    [0, 1],
    [1, 1],
    [5, 120],
    [10, 3_628_800],
    [450, Infinity],
];

const errorCases = [
    [-1, RangeError],
    [1.3, RangeError],
    ['test', RangeError],
    [undefined, RangeError],
    [null, RangeError],
    [true, RangeError],
    [false, RangeError],
];

describe('Given factorial function', () => {
    test.each(cases)('Factorial de %i es %i', (value, expected) => {
        const result = factorial(value);
        expect(result).toBe(expected);
    });
});

describe.each(errorCases)(
    'Given factorial function with error case',
    (value, expected) => {
        test(`factorial de ${value} lanza un error`, () => {
            expect(() => {
                factorial(value);
            }).toThrowError(expected);
        });
    }
);

// Alternativa sin iteración
// test('factorial de 0 es 1', () => {
//     const value = 0;
//     const expected = 1;
//     const result = factorial(value);
//     expect(result).toBe(expected);
// });
// test('factorial de 1 es 1', () => {
//     const value = 1;
//     const expected = 1;
//     const result = factorial(value);
//     expect(result).toBe(expected);
// });
// test('factorial de 5 es 120', () => {
//     const value = 5;
//     const expected = 120;
//     const result = factorial(value);
//     expect(result).toBe(expected);
// });
// test('factorial de 10 es 3.628.800', () => {
//     const value = 10;
//     const expected = 3_628_800;
//     const result = factorial(value);
//     expect(result).toBe(expected);
// });
// test('factorial de 450 es Infinity', () => {
//     const value = 450;
//     const expected = Infinity;
//     const result = factorial(value);
//     expect(result).toBe(expected);
// });

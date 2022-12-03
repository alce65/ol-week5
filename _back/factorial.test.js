import { factorial, factorialR } from './factorial';

describe('Given factorial function', () => {
    const cases = [
        [0, 1],
        [1, 1],
        [5, 120],
        [450, 1.733368733 * 10 ** 1000],
    ];

    describe.each(cases)('When parameter is %i', (value, expected) => {
        test(`Then it should return ${expected}`, () => {
            const result = factorial(value);
            expect(result).toBe(expected);
        });
    });

    const errorCases = [
        [-1, RangeError],
        [1.6, RangeError],
        ['pepe', RangeError],
    ];

    describe.each(errorCases)('When it is run with %i', (value, error) => {
        test('Then it should throw an error', () => {
            expect(() => factorial(value)).toThrow(error);
        });
    });
});

describe('Given factorialR function', () => {
    const cases = [
        [0, 1],
        [1, 1],
        [5, 120],
        [450, 1.733368733 * 10 ** 1000],
    ];

    describe.each(cases)('When parameter is %i', (value, expected) => {
        test(`Then it should return ${expected}`, () => {
            const result = factorialR(value);
            expect(result).toBe(expected);
        });
    });

    const errorCases = [
        [-1, RangeError],
        [1.6, RangeError],
        ['pepe', RangeError],
    ];

    describe.each(errorCases)('When it is run with %i', (value, error) => {
        test('Then it should throw an error', () => {
            expect(() => factorialR(value)).toThrow(error);
        });
    });
});

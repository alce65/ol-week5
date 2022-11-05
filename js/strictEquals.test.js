import {
    strictEquals,
    // strictEqualsMini,
    strictEqualsBasic,
    strictEqualsEstefania,
    // strictEqualsJavier,
    // strictEqualsMaria,
    strictEqualsAnaBelem,
    // strictEqualsMichael,
    // strictEqualsPatricia,
    strictEqualsVictor,
    // strictEqualsMiguel,
    strictEqualsCristian,
    // strictEqualsKick,
    // strictEqualsAlberto,
    strictEqualsAitor,
} from './strictEquals.js';

const data = [
    // NaN === NaN return false, although Object.is(NaN,NaN) return true
    { a: NaN, b: NaN, label: 'NaN v. NaN', result: false },
    { a: NaN, b: 1, label: 'NaN v. 1', result: false },
    // 0 === -0 return true, although Object.is(0,-0) return false
    { a: 0, b: -0, label: '0 v. -0', result: true },
    { a: -0, b: 0, label: '-0 v. 0', result: true },
    { a: -0, b: 1, label: '-0 v. 1', result: false },
    { a: 1, b: -0, label: '1 v. -0', result: false },
    // Standard cases with 0
    { a: 0, b: 0, label: '0 v. 0', result: true },
    { a: 0, b: 1, label: '0 v. 1', result: false },
    // Standard cases
    { a: 1, b: '1', label: '1 v. "1"', result: false },
    { a: 1, b: 1, label: '1 v. 1', result: true },
    { a: true, b: false, label: 'true v. false', result: false },
    { a: false, b: false, label: 'false v. false', result: true },
    { a: 'water', b: 'oil', label: 'water v. oil', result: false },
    { a: '', b: '', label: '"" v ""', result: true },
    {
        a: undefined,
        b: undefined,
        label: 'undefined v. undefined',
        result: true,
    },
    { a: null, b: null, label: 'null v. null', result: true },
    { a: {}, b: {}, label: '{} v. {}', result: false },
];
describe('Given strictEquals function', () => {
    data.forEach((item) => {
        test(`When arguments are ${item.label}
            Then result should be ${item.result}`, () => {
            const r = strictEquals(item.a, item.b);
            expect(r).toBe(item.result);
        });
    });
});

// Por si se añade otra prueba
// describe('Given strictEqualsMini function', () => {
//     data.forEach((item) => {
//         test(`When arguments are ${item.label}
//             Then result should be ${item.result}`, () => {
//             const r = strictEqualsMini(item.a, item.b);
//             expect(r).toBe(item.result);
//         });
//     });
// });

describe('Given strictEqualsBasic function', () => {
    data.forEach((item) => {
        test(`When arguments are ${item.label}
            Then result should be ${item.result}`, () => {
            const r = strictEqualsBasic(item.a, item.b);
            expect(r).toBe(item.result);
        });
    });
});

describe('Given strictEqualsEstefania function', () => {
    data.forEach((item) => {
        test(`When arguments are ${item.label}
            Then result should be ${item.result}`, () => {
            const r = strictEqualsEstefania(item.a, item.b);
            expect(r).toBe(item.result);
        });
    });
});

describe('Given strictEqualsAnaBelem function', () => {
    data.forEach((item) => {
        test(`When arguments are ${item.label}
            Then result should be ${item.result}`, () => {
            const r = strictEqualsAnaBelem(item.a, item.b);
            expect(r).toBe(item.result);
        });
    });
});

describe('Given strictEqualsVictor function', () => {
    data.forEach((item) => {
        test(`When arguments are ${item.label}
            Then result should be ${item.result}`, () => {
            const r = strictEqualsVictor(item.a, item.b);
            expect(r).toBe(item.result);
        });
    });
});

describe('Given strictEqualsCristian function', () => {
    data.forEach((item) => {
        test(`When arguments are ${item.label}
            Then result should be ${item.result}`, () => {
            const r = strictEqualsCristian(item.a, item.b);
            expect(r).toBe(item.result);
        });
    });
});

describe('Given strictEqualsAitor function', () => {
    data.forEach((item) => {
        test(`When arguments are ${item.label}
            Then result should be ${item.result}`, () => {
            const r = strictEqualsAitor(item.a, item.b);
            expect(r).toBe(item.result);
        });
    });
});

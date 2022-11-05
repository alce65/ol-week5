export const strictEquals = (a, b) => {
    if (Object.is(a, NaN)) return false;
    if (!a && !b) return true;
    return Object.is(a, b);
};

export const strictEqualsBasic = (a, b) => {
    if (Object.is(a, NaN)) {
        return false;
    }

    // Demasiada complejidad ciclomática
    if (
        (Object.is(a, 0) || Object.is(a, -0)) &&
        (Object.is(b, 0) || Object.is(b, -0))
    ) {
        return true;
    }

    // Prueba insuficiente: no cubre todos los casos
    // if (Object.is(a, -0) || Object.is(b, -0)) {
    //     return true;
    // }

    return Object.is(a, b);
};

export const strictEqualsCristian = (a, b) => {
    if (
        (Object.is(a, NaN) && Object.is(NaN, b)) ||
        (Object.is(0, b) && Object.is(a, -0)) ||
        (Object.is(-0, b) && Object.is(a, 0))
    ) {
        return !Object.is(a, b);
    }

    return Object.is(a, b);
};

export const strictEqualsAnaBelem = (a, b) => {
    // Exceptions

    // Excepción nº1.   NaN
    if (Number.isNaN(a) && Number.isNaN(b)) {
        return false;
    }

    // Excepción nº2. 0 y -0
    if (
        (Object.is(a, -0) && Object.is(b, 0)) ||
        (Object.is(b, -0) && Object.is(a, 0))
    ) {
        return true;
    }
    // Todas las demás comparaciones devuelven booleano correcto
    return Object.is(a, b);
};

export function strictEqualsEstefania(a, b) {
    if (Object.is(a, b)) {
        return !(Object.is(a, NaN) && Object.is(b, NaN)) ? true : false; //! in the condition for the value1 to be true
    }
    return (Object.is(a, 0) && Object.is(b, -0)) ||
        (Object.is(a, -0) && Object.is(b, 0))
        ? true
        : false;
}

export const strictEqualsVictor = (a, b) => {
    if (Object.is(a, b)) {
        if (Object.is(a, NaN)) {
            return !Object.is(a, b);
        }
        return Object.is(a, b);
    }
    if (
        (Object.is(a, 0) && Object.is(b, -0)) ||
        (Object.is(a, -0) && Object.is(b, 0))
    ) {
        return !Object.is(a, b);
    }
    return Object.is(a, b);
};

export function strictEqualsAitor(valor1, valor2) {
    if (Object.is(valor1, valor2)) {
        if (Object.is(valor1, NaN)) {
            return false;
        }
        return true;
    }
    if (Object.is(valor1, -0) && Object.is(0, valor2)) {
        return true;
    }
    if (Object.is(0, valor1) && Object.is(valor2, -0)) {
        return true;
    }
    return false;
}

// Falla undefined v. undefined
// export function strictEqualsAlberto(a, b) {
//     if (isNaN(a) && isNaN(b)) {
//         return false;
//     }
//     if (!a && !b) {
//         return true;
//     }
//     if (Object.is(a, b)) {
//         return true;
//     }
//     return false;
// }

// Falla -0 === 1 && 1 === -0
// export function strictEqualsJavier(a, b) {
//     const result = Object.is(a, b);
//     if (Number.isNaN(a) && Number.isNaN(b)) {
//         return !result;
//     }
//     if (Object.is(-Infinity, 1 / a) || Object.is(-Infinity, 1 / b)) {
//         return !result;
//     }
//     return result;
// }

// Falla 0 === 0
// export const strictEqualsMaria = (a, b) => {
//     let valueA = a;
//     const valueB = b;
//     // Por defecto, la función Object.is() devuelve TRUE cuando se trata de NaN
//     if (Number.isNaN(a)) {
//         // Para lograr que NaN devuelva FALSE usando la función Object.is(), isNaN devuelve TRUE, lo convierto en string.
//         valueA = a.toString();

//         // Por defecto, la función Object.is() devuelve FALSE cuando se trata de comparar 0 positivo y negativo
//     } else if (Number.isInteger(a) && a < 1) {
//         // Para solventarlo, si 'a' es un número y es menor que 1, le doi valor negativo para que siempre sea un negativo con negativo que resulte positivo o que dé a ambos el negativo
//         valueA = -a;
//     }

//     const result = Object.is(valueA, valueB);
//     return result;
// };

// Falla 0 === 0
// export const strictEqualsPatricia = (a, b) => {
//     let valueA = a;
//     const valueB = b;
//     // Por defecto, la función Object.is() devuelve TRUE cuando se trata de NaN
//     if (Number.isNaN(a)) {
//         // Para lograr que NaN devuelva FALSE usando la función Object.is(), isNaN devuelve TRUE, lo convierto en string.
//         valueA = a.toString();

//         // Por defecto, la función Object.is() devuelve FALSE cuando se trata de comparar 0 positivo y negativo
//     } else if (Number.isInteger(a) && a < 1) {
//         // Para solventarlo, si 'a' es un número y es menor que 1, le doi valor negativo para que siempre sea un negativo con negativo que resulte positivo o que dé a ambos el negativo
//         valueA = -a;
//     }

//     const result = Object.is(valueA, valueB);
//     return result;
// };

// Falla 0 === 0
// export function strictEqualsMichael(a, b) {
//     const exceptionNaN = [NaN];
//     const exception0 = [0];
//     const exceptionNEgative0 = [-0];
//     if (exceptionNaN.includes(a) && exceptionNaN.includes(b)) {
//         return !Object.is(a, b);
//     }

//     if (exception0.includes(a) && exceptionNEgative0.includes(b)) {
//         return !Object.is(a, b);
//     }

//     if (exceptionNEgative0.includes(a) && exception0.includes(b)) {
//         return !Object.is(a, b);
//     }
//     return Object.is(a, b);
// }

// Falla 0 === 0
// export const strictEqualsMiguel = (a, b) => {
//     const result = Object.is(a, b);

//     if (Number.isNaN(a) && Number.isNaN(b)) {
//         return !result;
//     }

//     // CHECK BOTH FALSYS
//     if (!a && !b) {
//         // DISCARD "" VS "" case
//         if (String(a).length <= 0 && String(b).length <= 0) {
//             return result;
//         }
//         // DISCARD BOTH ARE TYPE BOOLEAN VALUE FALSE
//         if (!(String(a).length > 1 && String(b).length > 1)) {
//             return !result;
//         }

//         return result;
//     }

//     return result;
// };

// Falla en 3 casos: -0 v. 1, 1 v. -0, 0 v.. 1
// export function strictEqualsKick(a, b) {
//     if (Object.is(a, b)) {
//         if (Number.isNaN(a) || Number.isNaN(b)) {
//             return false;
//         }
//         return true;
//     }
//     if (
//         Object.is(a, -0) ||
//         Object.is(a, 0) ||
//         Object.is(0, b) ||
//         Object.is(-0, b)
//     ) {
//         return true;
//     }
//     return false;
// }

// Falla la mayoría
// export const strictEqualsOmar = (a, b) => {
//     if (Object.is(NaN, NaN)) {
//         return !Object.is(a, b);
//     }
//     if (Object.is(-0, 0) || Object.is(0, -0)) {
//         return !Object.is(a, b);
//     }
// };

// Total fallos: 10

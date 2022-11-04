import { factorial } from './factorial.js';

try {
    let n = -56;
    console.log(factorial(n));
} catch (error) {
    console.log(error.message);
}
console.log('Resto del código');

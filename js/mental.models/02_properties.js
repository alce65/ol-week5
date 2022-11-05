/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-undef

// console.log(foo); // ReferenceError: foo is not defined
let bar;
console.log(bar);

let obj = {};
console.log(obj.name); // ¿ReferenceError: name is not defined?

// console.log(obj.name.x); // TypeError: Cannot read properties of undefined (reading 'x')

// Optional chaining (Encadenamiento opcional) operator

console.log(obj.name?.x);

obj.foo = undefined;
console.log(obj);
console.log(obj.foo);

const userName = 'Pepe';
console.log(userName.toUpperCase());
console.log(userName);

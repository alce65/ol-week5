/* eslint-disable no-unused-vars */

const aData = [45, 67];
aData[78] = 23;
aData.owner = 'Pepe';
console.log(aData);

// Metodos de Orden Superior ( callback )
aData.forEach((item) => {
    console.log(item);
});

const obj = { name: 'Pepe', age: 23 };

for (const key in obj) {
    const value = obj[key];
}

Object.entries(obj);
Object.keys(obj);
Object.values(obj);

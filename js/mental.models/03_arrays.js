const aData = [34, 67];
aData.push(23); // Metodo Mutable
aData.forEach((item) => console.log(item));

const aDataSquares = aData.map((item) => item * item); // Método inmutable
console.log(aDataSquares);
console.log(aData);
console.log(aData.length);

const arrayLength = (arr) => {
    let i = 0;
    while (arr[i]) {
        i++;
    }
    return i;
};

console.log(arrayLength(aData));

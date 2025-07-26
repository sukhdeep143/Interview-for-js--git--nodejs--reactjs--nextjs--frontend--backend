const arrayDuplication = [1,2,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,8,8,8,9,9,9,9,9];

let priv = [];
let index = 0;

// First element is always unique
priv[index] = arrayDuplication[0];
index++;

for(let i = 1; i < arrayDuplication.length; i++) {
    if(arrayDuplication[i] !== arrayDuplication[i - 1]) {
        priv[index] = arrayDuplication[i];
        index++;
    }
}

console.log(priv);

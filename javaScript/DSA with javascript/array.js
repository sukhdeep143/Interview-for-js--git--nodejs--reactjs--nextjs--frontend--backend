let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // apple


// Insertion

fruits.push("orange");      // Add to end
fruits.unshift("grape");    // Add to start
// Deletion

fruits.pop();               // Remove from end
fruits.shift();             // Remove from start
// Searching

fruits.indexOf("banana");   // Returns index or -1
fruits.includes("apple");   // true/false
// Iteration

fruits.forEach((fruit) => console.log(fruit));
// Transformation

let upperFruits = fruits.map(fruit => fruit.toUpperCase());
// Filtering

let shortFruits = fruits.filter(fruit => fruit.length <= 5);
// Reducing

let totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
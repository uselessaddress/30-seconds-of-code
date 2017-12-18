// Use Array(n) to create an array of the desired length, fill(v) to fill it with the desired values. You can omit value to use a default value of 0.

const initializeArray = (n, value = 0) => Array(n).fill(value);

console.log(initializeArray(5, 2))
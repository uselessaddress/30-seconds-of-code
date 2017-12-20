// Use Array.reduce() to add each value to an accumulator, initialized with a value of 0.

const sum = arr => arr.reduce((acc, val) => acc + val, 0);

console.log(sum([1,2,3,4]))
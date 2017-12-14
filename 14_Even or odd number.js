// Use Math.abs() to extend logic to negative numbers, check using the modulo (%) operator. Return true if the number is even, 
//false if the number is odd.

const isEven = num => Math.abs(num) % 2 === 0;
// isEven(3) -> false
// Use recursion. If n is less than or equal to 1, return 1. Otherwise, 
// return the product of n and the factorial of n - 1

const Factoroal = n => n === 1 ? 1 : n * Factoroal(n - 1)

console.log(Factoroal(6))
// If n is even, return n/2. Otherwise return 3n+1.

const collatz = n => ( n%2 == 0 ) ? (n/2) : (3*n+1)

console.log(collatz(4))
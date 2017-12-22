// Use ES6 Set and the ...rest operator to discard all duplicated values.
const unique = arr => [...new Set(arr)]

console.log(unique([1,2,1,3,1,2]))
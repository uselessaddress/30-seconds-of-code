// Use Array.slice() to create a slice of the array with n elements taken from the beginning.
const take = (arr, n = 1) => arr.slice(0, n);
console.log(take([1,2,3],5))
console.log(take([1,2,3],0))
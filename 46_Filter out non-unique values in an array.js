// Use Array.filter() for an array containing only the unique values
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
console.log(filterNonUnique([1,2,2,3,4,4,5]))
// Create a Set with all values of a and b and convert to an array.

// const union = (a,b)=>[...new Set([...a,...b])]
const union = (a,b)=> Array.from(new Set([...a, ...b]));
console.log(union([1,2,3],[3,4,5]))
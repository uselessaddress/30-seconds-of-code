// Use Array.slice() to get an array containing the nth element at the first place. If the index is out of bounds, return []. Omit the second argument, n, to get the first element of the array.

const nth = (arr, n=0) => (n>0? arr.slice(n,n+1) : arr.slice(n))[0];
// nth(['a','b','c'],1) -> 'b'
// nth(['a','b','b'],-2) -> 'a'
console.log(nth(['a','b','c'],1))
console.log(nth(['a','b','b'],-2))
// Use Array(end-start) to create an array of the desired length, 
//Array.map() to fill with the desired values in a range. 
//You can omit start to use a default value of 0.
const initializeArrayRange = (end, start = 0) =>
Array.apply(null,Array(end - start)).map((v, i) => i + start);

console.log(initializeArrayRange(5))
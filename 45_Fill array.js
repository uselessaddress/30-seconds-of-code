// Use Array.map() to map values between start (inclusive) and end (exclusive) to value. Omit start to start at the first element and/or end to finish at the last.

const fillArray = (arr, value, start = 0, end = arr.length) =>{
   return (arr.map((v, i) => i >= start && i < end ? value : v)) 
}
 
console.log( fillArray([1,2,3,4],'8',1,3))
// fillArray([1,2,3,4],'8',1,3) -> [1,'8','8',4]


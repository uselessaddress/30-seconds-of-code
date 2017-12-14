// Use Array.from() to create a new array,
// that fits the number of chunks that will be produced. 
// Use Array.slice() to map each element of the new array to
//  a chunk the length of size. 
//  If the original array can't be split evenly,
//   the final chunk will contain the remaining elements.


//题目大意：按照指定的长度去分割给定的数组

//MDN上的用法
// Generate a sequence of numbers
// Since the array is initialized with `undefined` on each position,
// the value of `v` below will be `undefined`
//Array.from({length: 5}, (v, i) => i);
// [0, 1, 2, 3, 4]

const chunk = (arr,size)=>{
    return Array.from({length:Math.ceil(arr.length / size)},(v,i)=>arr.slice(i*size,i*size+size))
}

console.log(chunk([1,2,1,1,2,1,1],2))
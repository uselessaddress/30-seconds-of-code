// Loop through the array,
//  using Array.shift() to drop the first element of the array until the returned value from the function is true.
//   Returns the remaining elements.

const dropElements = (arr,func)=>{
    while(arr.length > 0 && !func(arr[0]))
        arr.shift()
    return arr
}
console.log(dropElements([1, 2, 3, 4],n => n >= 3))
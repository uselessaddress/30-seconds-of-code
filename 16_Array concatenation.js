// Use Array.concat() to concatenate and
// array with any additional arrays and/or values,
// specified in args.

//concat取的是参数的元素（如果参数是数组）或参数本身（如果参数不是数组）
const arrayConcat = (arr,...args)=>{
    // console.log(args)
    // console.log(...args)
    return arr.concat(...args)
}
// console.log([1].concat([2,[3],[[4]]]))
// console.log([1].concat(2,[3],[[4]]))
console.log(arrayConcat([1],2,[3],[[4]]))
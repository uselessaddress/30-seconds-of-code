// Use recursion. Use Array.reduce() to get all elements that are not arrays, flatten each element that is an array.

//题目大意:将有数组嵌套的数组变为没有嵌套的数组

const deepFlatten = arr =>{
   return arr.reduce((a,v)=>{
        return a.concat(Array.isArray(v)?deepFlatten(v):v)
    },[])
}

console.log(deepFlatten([1,[1,2],[1,2,3]]))
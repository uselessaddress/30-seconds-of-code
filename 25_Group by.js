// Use Array.map() to map the values of an array to
// a function or property name.
// Use Array.reduce() to create an object, 
//where the keys are produced from the mapped results.

const groupBy = (arr,func)=>{
    return arr.map(typeof func === 'function'?func:val => {
        return val[func]
    }).reduce((pre,cur,index)=>{
        pre[cur] = (pre[cur]||[]).concat(arr[index])
        return pre
    },{})
}

console.log(groupBy([6.1, 4.2, 6.3], Math.floor))
console.log(groupBy(['one', 'two', 'three'],'length'))
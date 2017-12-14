// Create a Set from b, then use Array.filter() on a to only keep values not contained in b.
//返回数组a在数组b中没有出现的
const intersection = (a,b) => {
    const s = new Set(b) //b去重
    return a.filter(x=>!s.has(x))
}

console.log(intersection([1,2,3],[1,2]))


// Array difference

// Create a Set from b, then use Array.filter() on a to only keep values not contained in b.

//返回a中没出现b中的元素的数组
const difference = (a, b) => { const s = new Set(b); return a.filter(x => !s.has(x)); };

console.log(difference([1,2,3], [1,2]))
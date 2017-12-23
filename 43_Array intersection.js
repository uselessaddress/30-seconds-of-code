// Create a Set from b, then use Array.filter() on a to only keep values contained in b.

const intersection = (a, b) => { const s = new Set(b); return a.filter(x => s.has(x)); };

console.log(intersection([1,2,3], [4,3,2]))
// Use Array.filter() to filter out falsey values (false, null, 0, "", undefined, and NaN).

const compact = (arr) => arr.filter(v=>v)
console.log(compact([0, 1, false, 2, '', 3, 'a', 'e'*23, NaN, 's', 34]))
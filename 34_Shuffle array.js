// Use Array.sort() to reorder elements, using Math.random() in the comparator.

const shuffle = arr => arr.sort(() => Math.random() - 0.5);

console.log(shuffle([1,2,3]))
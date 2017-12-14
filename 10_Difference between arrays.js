// Use filter() to remove values that are part of values, determined using includes().

//题目大意：使用filter&include.把两个数组中重复的值去掉

const difference = (arr1,arr2) =>   {
    return arr1.filter(v=>!arr2.includes(v)).concat(arr2.filter(v=>!arr1.includes(v)))
}

console.log(difference([1,2,3,4],[1,2]))
console.log(difference([1,2,4],[1,2,3]))
// Use reduce() to increment a counter each time you encounter the specific value inside the array.

//题目大意：统计给定数字，在给定数组里出现的次数

const countOccurrences = (arr,val)=>{
    return arr.reduce((pre,now)=> now===val?pre+1:pre,0)
}

console.log(countOccurrences([1,1,1,2,3,1],1))
console.log(countOccurrences([1,2,4,2,4],2))
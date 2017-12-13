// Use reduce() to add each value to an accumulator, 
//initialized with a value of 0, divide by the length of the array.

//题目大意：使用reduce计算数组中所有数的平均值

const average = arr =>{
    return arr.reduce((pre,val)=>pre+val,0) / arr.length
}

console.log(average([0,2,1,4,3]))
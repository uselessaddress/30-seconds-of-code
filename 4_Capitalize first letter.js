// Capitalize first letter
// Use slice(0,1) and toUpperCase() to capitalize first letter, slice(1) to get the rest of the string. Omit the lowerRest parameter to keep the rest of the string intact, 
//or set it to true to convert to lower case.

//题目大意：将字符串第一个字符变为大写，剩下的根据第二参数决定

const capitalize=(str,lowerRest=false)=>{
    return str.slice(0,1) + (lowerRest?str.slice(1).toLowerCase():str.slice(1))
}
//注意后面加括号，否则会先计算str.slice(0,1)+lowerRest为true
console.log(capitalize('WHAT?'))
console.log(capitalize('WHAT?', true))
// Convert string toLowerCase() and use replace() to remove non-alphanumeric characters from it.
//  Then, split('') into individual characters, 
//  reverse(), join('') and compare to the original, unreversed string, 
//  after converting it tolowerCase().

//题目大意:传入一个字符串，去掉其所有非字母数字字符后判断是不是回文
// 先用正则 /\W/g 匹配所有非字母数字字符
const palindrome = str =>{
    // console.log(str.toLowerCase().replace(/[\W]/g,''))
    return str.toLowerCase().replace(/[\W]/g,'').split('').reverse().join('')
        === str.toLowerCase().replace(/[\W]/g,'')
}
console.log(palindrome('tcao act'))
console.log(palindrome('123&32 1'))
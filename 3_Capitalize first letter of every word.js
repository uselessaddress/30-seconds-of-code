// Use replace() to match the first character of 
//each word and toUpperCase() to capitalize it.
//题目大意:将一句话中的所有单词的首字母大写
//解决思路：使用正则表达式
const capitalizeEveryWord = str =>{
    return str.replace(/\b[a-z]/g,char=>char.toUpperCase())
}
console.log(capitalizeEveryWord('hello world'))
console.log(capitalizeEveryWord('hello world sacc'))


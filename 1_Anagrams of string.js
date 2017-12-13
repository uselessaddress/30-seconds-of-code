// Anagrams of string (with duplicates)

// Use recursion. For each letter in the given string, 
// create all the partial anagrams for the rest of its letters. 
// Use map() to combine the letter with each partial anagram, 
// then reduce() to combine all anagrams in one array. 
// Base cases are for string length equal to 2 or 1.

//题目大意：给定一个字符串，然后输出这个字符串的所有排列组合形式 
//解决思路：递归，把问题拆解
const anagrams = str =>{
    if(str.length<=2)
        return str.length === 2 ? [str,str[1]+str[0]] : [str]
    return str.split('').reduce((pre,letter,i)=>{
        anagrams(str.slice(0,i)+str.slice(i+1)).map( val => pre.push(letter+val))
        return pre
    },[])
}

console.log(anagrams('abcd'))
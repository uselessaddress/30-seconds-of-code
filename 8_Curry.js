// Use recursion. If the number of provided arguments (args) is sufficient,
//  call the passed function f. 
//  Otherwise return a curried function f that expects the rest of the arguments. 
//  If you want to curry a function that accepts a variable number of arguments
//   (a variadic function, e.g. Math.min()), 
// you can optionally pass the number of arguments to the second parameter arity.


//题目大意：使用柯里化的方法给一个指定的函数传参并返回执行结果，参数长度可控，例如Math.pow需要2个参数，
//那么就递归的方法依次传入2,10然后执行

// 解题思路： 首先是声明柯里函数:curry，第一个参数表示需要传参执行的函数，
// 然后使用自调用方法传入参数数组初值[]，并返回一个函数接受第一个参数，
// 这时候next函数中的prevArgs是[]，返回的新函数传入(2),参数数组变为[2]，
// 因为Math.pow需要的是两个参数，所以继续调用next，接着返回新的函数传入(10)，
// 最后参数数组变为[2,10]，并执行Math.pow(2,10)最后返回1024


const curry = (f, arity = f.length) =>
(next = prevArgs =>
  nextArg => {
    const args = [ ...prevArgs, nextArg ];
    return args.length >= arity ? f(...args) : next(args);
  }
)([]);

// const curry = function(f,arity=f.length){
//     let next = function(prevArgs){
//         return function(nextArgs){
//             const args = [...prevArgs,nextArgs];
//             return args.length >= arity ? f(...args) : next(args)
//         }
//     }
//     return next([])
// }


console.log(curry(Math.pow)(2)(10))
console.log(curry(Math.min,3)(10)(50)(2))

// console.log(Math.pow(2,10))
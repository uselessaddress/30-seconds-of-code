// Use Math.hypot() to calculate the Euclidean distance between two points.
//Math.hypot()返回传入参数的平方和的平方根


const distance = (x0,y0,x1,y1) => Math.hypot(x0-x1,y0-y1)

console.log(distance(3,0,0,4))
console.log(distance(1,1,2,2))
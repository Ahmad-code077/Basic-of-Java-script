/*  instead of doing this we can use function
let a = 1;
let b = 2;
let c = 3;

console.log("One plus average of a and b", 1 +(a+b)/2 )
console.log("One plus average of a and b", 1 +(a+c)/2 )
console.log("One plus average of a and b", 1 +(b+c)/2 )
*/

function oneaddavg(x,y){
    return 1 + (x+y)/2
}

let a = 1;
let b = 2;
let c = 3;

console.log("One plus average of a and b",oneaddavg(a,b) )
console.log("One plus average of a and b", oneaddavg(a,c) )
console.log("One plus average of a and b", oneaddavg(b,c))

// Another way to write a function
const sum = (p,q) =>{
    return p + q
}

console.log(sum(9,11))
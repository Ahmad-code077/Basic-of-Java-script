// For Loop
let sum = 0
let prompt = require("prompt-sync")();
let n = prompt("Enter the number to add it from start")
n = Number.parseInt(n)
for (let i = 0 ; i<n; i++){
    sum +=(i+1)
    // console.log((i+1), "+")
}
console.log("sum of the given number" +n+ "natural number is " +sum)

/*
let obj = {
    Ali : 34,
    Aslam : 44,
    Saad : 67,
    Rehan : 89,
    Asad : 93
}
// For in loop
for (let a in obj){
    console.log(" marks of " + a + " are " +obj[a])
}
// For of loop

for (let a of "Ahmad"){
    console.log(a)
}
*/


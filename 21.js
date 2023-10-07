// Chapter no 5 
// Problem no 1 : Create an array of number and take input from the user and add the input into array

// let arr = [1, 2, 3, 4, 5, 6, 7]
// const prompt = require("prompt-sync")();
// let a = prompt("Enter your number")
// a = Number.parseInt(a);
// arr.push(a)
// console.log(arr)

// Problem no 2 :  Keep adding number to the array in 1 untill 0 is added to the array
/*
let num = [1, 2, 3, 4, 5, 6, 7, 8]
let a;
do {
    const prompt = require("prompt-sync")();
    a = prompt("Enter the accurate number")
    a = Number.parseInt(a)
    num.push(a)
} while (a != 0)

console.log(num)
*/

// Problem no 3 : Filter for number divisible by 10 from a given array
/*
let a = [1, 20, 50, 44, 66, 90, 69, 70]
let n = a.filter((x) => {
    return x % 10 == 0
})
console.log(n)
*/

// Problem no 4 : Create an arrar of square of given numbers 
/*
let a = [1, 20, 50, 44, 66, 90, 69, 70]
let n = a.map((x) => {
    return x * x
})
console.log(n)
*/

// Problem no 5 : use reduce to calculate the factorail of a given number from an array of first n natural number 

let e = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let s = e.reduce((x1, x2) => {
    return x1 * x2
})
console.log(s)
// While loop
/*
const prompt = require("prompt-sync")();
let n = prompt(" Enter your number ");
n = Number.parseInt(n);
let i = 0 ;
while (i<n){
    console.log(i+1)
    i++ ;
}
*/
// Do-while loop

const prompt = require("prompt-sync")();
let n = prompt(" Enter your number ");
n = Number.parseInt(n);
let i = 10 ;
do {
    console.log(i)
    i++ ;
  } while (i<n)
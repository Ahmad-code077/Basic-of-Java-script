// Chapter 2 Questions : Problem # 1
// use logical operator to find the age lies between 10 and 20 
/*
const prompt = require("prompt-sync")();
let a = prompt("Enter your age"); 
if (a >= 10 && a <= 20) {
  console.log("Your age lies between 10 and 20");
} else console.log("Your age is not lies between 10 and 20");
*/

//Problem # 2
// Demonstrate the use of switch case in java script

/*
const prompt = require("prompt-sync")();
let age = prompt("What is your age")
switch (age) {

  case '12' :
    console.log("your age is 12")
    break
  case '13' :
    console.log("your age is 13")
    break
  case '14' :
    console.log("your age is 14")
    break
  case '15' :
    console.log("your age is 15")
    break
    default :
    console.log("your age is not special")
}
*/
//Problem # 3 
// Write a java-script program to find whether the number is divisible by 2 and 3

/*
const prompt = require("prompt-sync")();
let num = prompt("Write number which is completely divisible by 2 and 3")
num = Number.parseInt(num);
if (num%2==0 && num%3==0){ 
console.log("Your number is divisible by 2 and 3")
}
else {
 console.log("Your number is not divisible by 2 and 3")
}
*/

// Problem # 4
// Write a Java-script program to find the number is either divisible by 2 or 3
/*
const prompt = require("prompt-sync")();
let num = prompt("Write a number which is either divisible by 2 or 3 ")
num = Number.parseInt(num);
if (num%2==0) {
  console.log("Your number is divisible by 2")
}
else if (num%3==0) {
  console.log("Your number is divisible by 3")
}
else {
  console.log("Your number is not divisible by 2 and 3")
}
*/

//Problem no 5
// Print "you can drive" or "you cannot drive" based on the age 18 by using ternary operator

let age =7
let a = age > 18 ? "You can drive" : "You cannot drive"
console.log(a)
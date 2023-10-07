// Chapter 3 
// Problem no 1 : Write a program to print the marks of students in an object using for loop

 let marks = {
Ali : 56,
Akram: 33,
    Saad : 43,
    Waseem : 87
}

for(let  i=0; i<Object.keys(marks).length; i++){
    console.log (" The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

// Problem no 2 : Print the first question through for in loop
for (let key in marks){
    console.log("The marks of", key , "are" , marks[key] ) 
}

// Problem no 3 : Write a program to print "try-again" untill the user enter the correct number
let cn = 20
let i 
const prompt = require("prompt-sync")();
while (i!=cn){
    console.log("Try- again")
    i = prompt (" Enter a correct number ")
}
console.log("You have entered a correct number")

/*let cn = 20
let i 

while (i!=cn){
    alert("Try- again")
    i = prompt (" Enter a correct number ")
}
alert("You have entered a correct number")
*/

// Problem no 4 : Write a function to find the four number mean
    const mean =( a, b, c, d)=>{
        return (a + b + c + d) / 4
    }
    console.log(mean(10, 10, 10, 10))
    
// Chapter 4 : Questions
// Problem no 1 : What will be print in java script if the program is : console.log("har\"".length)
let string = "har\""
    console.log(string.length)

// Problem no 2 : Explore the include, start with and end with function with a string
const sentence = " We saw many animals in zoo such as Lion, Monkey, Elephant,Fox and Deer etc"
const word = "frog"
console.log(sentence.includes(word))
console.log(`The animal ${word} ${sentence.includes(word)? ' is ' : 'is not'} present in the zoo `)

// Problem no 3 : Write a program to convet given string into lower case
let a = "ABDULLAH"
console.log(a.toLowerCase())
console.log(a.toUpperCase())

// Problem no 4 : Extract the amount out of the string "Plese give me 1000 Rs"
let str = "Plese give me Rs 1000"
let amount =Number.parseInt( str.slice("Plese give me Rs ".length))
console.log(amount)
console.log(typeof amount)

// Problem no 5 : Try to change the 4th character of the string ? Were you able to do it 
let friend = "Shahzaib"
friend[3] = "r"
console.log(friend)
// We cannot change the existing string because strings are immutable . We can replace the string with other string
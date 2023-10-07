let num = [1, 2, 4, 3, 5, 7, 8]
// for (let i = 0; i < num.length; i++) {
//     console.log(num[i])
// }

// For-Each loop
// num.forEach((element) => {
//     console.log(element * element)
// })

// Array from : Convert string and othe things like html collection into Array
let name = "Ahmad"
let nam = Array.from(name)
console.log(nam)


// For of loop to print array elements
for (let i of num) {
    console.log(i)
}

// For in loop : Print index of an array and print array element if the syntex is written like this
for (let i in num) {
    console.log(num[i])
}

let arr = [1, 2, 45, 406, 320, 804]
// console.log(arr)

// Map is like for each loop but it give the new array
let a = arr.map((value, index, array) => {
    console.log(value, index, array)
    return value - 1
})
console.log(a)

// Array filter method

let arr2 = [43, 35, 50, 68, 804]
let a2 = arr2.filter((a) => {
    return a <= 50
})
// console.log(a2, arr2)

// Array reduce method
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let a3 = arr3.reduce((h1, h2) => {
    return h1 + h2
})
console.log(a3)
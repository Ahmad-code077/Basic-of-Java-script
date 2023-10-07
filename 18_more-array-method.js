// Delete method
/*
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(a.length)
delete a[0]
console.log(a)
console.log(a.length)*/

// Concat method
/*
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let b = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
let c = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29]

let newArray = a.concat(b, c)
console.log(newArray)
*/

// Sort function
/*
let compare = (a, b) => {
    return a - b
}
let num = [23, 45, 24, 7865, 786, 35, 342, 65, 3335]
num.sort(compare)
console.log(num)
*/
// Reverse function
/*
let d = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
d.reverse()
console.log(d)
*/
// Splice method
let e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let deletedvalue = e.splice(2, 4, 1032, 2032, 3032, 4032)
// The sequence of writing the splice items is firstly write the index start from, then write the element which is to be removed, and then write the element wwhich is to be added
console.log(e)
console.log(deletedvalue) // Return the elements which is removed from the array

// slice method
let num = [24, 43, 44, 756, 2435, 7875, 445, 5753, 55645, 7757, 65]
let newnum = num.slice(3, 9) // it return the new array only 
console.log(newnum)
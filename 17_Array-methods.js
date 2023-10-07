// Converting array to string 
let number = [1, 2, 3, 4, 5, 56]
let a = number.toString() // a is now a string
console.log(a, typeof a)

// Join method using seperator
let b = number.join("_")
console.log(b, typeof b)

// Pop method 
// number.pop() 
// Pop remove the last value from original array
let p = number.pop() // Pop return the popped value
console.log(number, p)

// Push method :  
// number.push(676) //Add a number in the last of array
let u = number.push(676) //Add a number in the last of array and gives new length
console.log(number)

// Shift method
// number.shift() // Remove the element from the start of an array
let s = number.shift() // Remove the element from the start of an array and give the shift element
console.log(number, s)

// Un-shift method 
// number.unshift(343) // Add a new element in an array
let c = number.unshift(343) // Add a new element in an array and give the new array length
console.log(number, c)


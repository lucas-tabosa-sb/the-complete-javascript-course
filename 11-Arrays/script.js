'use strict';

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]



///////////////////////////////////////////////////////////
// ARRAYS ARE OBJECTS, THEREFORE THEY HAVE ACCESS TO METHODS

// let arr = ['a', 'b', 'c', 'd', 'e']

// //SLICE METHOD -> returns a new array with the extracted parts -> starting from index 2
// console.log('------------- slice method -----------------') 
// console.log(arr.slice(2))
// console.log(arr.slice(2, 4)) // END parameter is not included in the output
// console.log(arr.slice(-2)) // starts from the end
// console.log(arr.slice(-1)) // gets the last element
// console.log(arr.slice(1, -2))
// console.log(arr.slice()) // shallow copy of the original array -> same as spread operator

// // SPLICE -> mutates the original array
// console.log('------------- splice method -----------------')
// console.log(arr)
// arr.splice(-1)
// console.log(arr)
// arr.splice(1, 2)
// console.log(arr)

// console.log('------------- reverse method -----------------')

// arr = ['a', 'b', 'c', 'd', 'e']
// const arr2 = ['j', 'i', 'h', 'g', 'f']
// console.log(arr2.reverse()) // mutates the original array
// console.log(arr2)

// console.log('------------- concat method -----------------')
// const letters = arr.concat(arr2)
// console.log(letters) // does not mutate the original one
// console.log([...arr, ...arr2])

// console.log('------------- join method -----------------')
// console.log(letters.join(', ')) // string with the specified separator

// const arr = [23, 11, 64]
// console.log(arr[0])

// console.log(arr.at(0))
// console.log(arr[arr.length -1])
// console.log(arr.slice(-1)[0])
// console.log(arr.at(-1)) // negative starts counting fron the right (last element)

// console.log('Lucas'.at(0))

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

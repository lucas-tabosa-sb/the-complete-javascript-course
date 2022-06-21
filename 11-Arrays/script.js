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

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

// console.log('------FOR OF-------')
// // for (const movement of movements){
// for (const [i, movement] of movements.entries()){
//     if(movement > 0){
//         console.log(`Moviment ${i + 1}: you deposited ${movement}`)
//     } else {
//         console.log(`Moviment ${i + 1}: you withdrew ${Math.abs(movement)}`)
//     }
// }

// console.log('------FOR EACH-------')
// // parameters = current element -> current index -> entire array
// movements.forEach(function(el, i, arr) {
//     if( el > 0){
//         console.log(`Moviment ${i + 1}: you deposited ${el}`)
//     } else {
//         console.log(`Moviment ${i + 1}: you withdrew ${Math.abs(el)}`)
//     }
// })

// continue and break won't work on forEach

// each inner array is an ENTRY
// const currencies = new Map([
//     ['USD', 'United States dollar'],
//     ['EUR', 'Euro'],
//     ['GBP', 'Pound Sterling']
// ])
// console.log(currencies)

// // same parameters as the forEach in an array
// currencies.forEach(function(value, key, map){
//     console.log(`${key}: ${value}`)
// })

// //SET - doesnt have keys
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])

// console.log(currenciesUnique)
// currenciesUnique.forEach(function(value, _, map){
//     console.log(`${value}: ${value}`)
// })
///////////////////////////////////////
// Coding Challenge #1

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

let julia1 = [3, 5, 2, 12, 7]
let julia2 = [9, 16, 6, 8, 3]
let kate1 = [4, 1, 15, 8, 3]
let kate2 = [10, 5, 6, 1, 4]

const checkDogs = function(dogsJulia, dogsKate){
    const dogsJuliaCorrected = dogsJulia.slice()
    dogsJuliaCorrected.splice(0, 1) // removes 1 element from index 0
    dogsJuliaCorrected.splice(-2) // removes 2 last elements
    const dogs = dogsJuliaCorrected.concat(dogsKate) // concats two arrays

    console.log(dogs)
    console.log(dogsJuliaCorrected)

    dogs.forEach(function(dog, i){
        if(dog>=3){
            console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`)
        } else {
            console.log(`Dog number ${i+1} is still a puppy`)
        }
    })
}

checkDogs(julia1, kate1)
console.log('-----------test data 2--------------')
checkDogs(julia2, kate2)
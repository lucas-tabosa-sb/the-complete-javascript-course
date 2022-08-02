'use strict'
///////////////////////////////////////
// Coding Challenge #2

/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// function calcAverageHumanAge(dogsAges) {
//     // if dog age <= 2 = humanAge = 2* dogAge
//     // if dog age > 2 = humanAge = 16 + dogAge*4

//     // stores the values in an array

//     // const humanAges = dogsAges.map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
//     const humanAges = dogsAges.map(dogAge => {
//         if(dogAge <= 2){
//             return 2 * dogAge
//         } else {
//             return 16 + dogAge * 4
//         }
//     })
//     console.log(humanAges)

//     // stores the validation result in a new array
//     const adultDogs = humanAges.filter(humanAge => humanAge > 18)
//     console.log(adultDogs)

//     // reduces the array to a value based on the calculation
//     const averageAge = adultDogs.reduce((acc, cur, _, arr) => {
//         let avg = Math.floor((acc + cur) / arr.length)
//         return avg
//     }, 36)
//     console.log(averageAge)

// }
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3])
// console.log('-------------------------------')
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])

const calcAverageHumanAge = (ages) => ages.map()
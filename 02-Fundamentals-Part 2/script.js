"use strict";
// forbids to do somethings, also creates visible errors in console for the dev to see

///////////////////////////////////////////////////////////////////////////////////////////////////////
/*
console.log('activating strict mode: ')
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true
if (hasDriversLicense) console.log('I can drive :D')
// const interface = 'Audio' // interface is a reserved word
// const private = 123 // private is a reserved word

*/
///////////////////////////////////////////////////////////////////////////////////////////////////////
/*
console.log('Functions: ')
// declaring a function
function logger() { console.log('my name is Lucas') }
// invoking the function -> executing
logger()

// functions receives parameters when being declared
function foodProcessor(apples, oranges){
    const juice =`juice with ${apples} apples and ${oranges} oranges`
    return juice
    // returns a value that can be assigned to a variable
}

// functions receive arguments when being invoked
const finalJuice = foodProcessor(2, 4)
// the value of the process is the return in the function, needs to be stored in a variable
console.log(finalJuice)

const appleOrangeJuice = foodProcessor(2, 10)
console.log(appleOrangeJuice)

// DRY -> don't repeat yourself

*/
///////////////////////////////////////////////////////////////////////////////////////////////////////
/*
console.log('Function Declaration and Expressions: ')

// function declaration:
function calcAge1(birthYear) {
    const currentYear = 2022
    return currentYear - birthYear
}

const age1 = calcAge1(1991)
console.log(age1)

// function expression:
const calcAge2 = function (birthYear){
    const currentYear = 2032
    return currentYear - birthYear
}
const age2 = calcAge2(1991)
console.log(age2)
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////
/*
// Arrow Functions:

const calcAge3 = (birthYear) => {
    return 2022 - birthYear
}

const age3 = calcAge3(1991)
// console.log(calcAge3(1991))
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear
    const retirementAge = 65 - age
    return `${firstName} can retire in ${retirementAge} years`
}

console.log(yearsUntilRetirement(1991, 'Lucas'))
console.log(yearsUntilRetirement(1999, 'Brenna'))

// arrow functions does not get "this" keyword

*/
///////////////////////////////////////////////////////////////////////////////////////////////////////
/*
// functions calling other functions:

function cutFruitPieces(fruit){
    return fruit * 2
}


function foodProcessor(apples, oranges){
    // receives the arguments and returns new values
    const applePieces = cutFruitPieces(apples)
    const orangePieces = cutFruitPieces(oranges)

    //the juice value will be returned based on the returned values of the functions above
    const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`
    return juice
}

console.log(foodProcessor(10, 8))
console.log(foodProcessor(1, 2))

*/
///////////////////////////////////////////////////////////////////////////////////////////////////////
/*
const calcCurrentAge = function(birthYear){
    const currentYear = 2022
    return currentYear - birthYear
}

const yearsUntilRetirement = function(birthYear, firstName) {

    const currentAge = calcCurrentAge(birthYear)

    const retirementAge = 65 - currentAge
    if(retirementAge > 0){
        return `${firstName} can retire in ${retirementAge} years`
    } else {
        return `${firstName} already retired`
    }
}

console.log(yearsUntilRetirement(1991, 'Lucas'))
console.log(yearsUntilRetirement(2003, 'Matheus'))
console.log(yearsUntilRetirement(1950, 'Mike'))

*/
///////////////////////////////////////////////////////////////////////////////////////////////////////
// CHALLENGE #1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
/*

const calculateAverage = (n1, n2, n3) => ((n1 + n2 + n3) / 3).toFixed(1)

// //test data 1
let avgDolphins = calculateAverage(44, 23, 71) // 46
let avgKoalas = calculateAverage(65, 54, 49) // 56

//test data 2
avgDolphins = calculateAverage(85, 54, 41) // 60
avgKoalas = calculateAverage(27, 34, 27) // 29.3


const checkWinner = function(avgDolphins, avgKoalas) {
    if(avgDolphins >= avgKoalas * 2){
        console.log(`winner is Dolphins (${avgDolphins} vs ${avgKoalas})`)
    } else if (avgKoalas >= avgDolphins * 2 ){
        console.log(`winner is Koalas (${avgKoalas} vs ${avgDolphins})`)
    } else {
        console.log('no winners')
    }
}

console.log(avgDolphins, avgKoalas)
checkWinner(avgDolphins, avgKoalas)
checkWinner(200, 100)
checkWinner(200, 400)

*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// data structures - ARRAY
/*
const friend1 = 'Lucas'
const friend2 = 'rafael'
const friend3 = 'deilson'

const friends = ["Deilson", 'Rafael', 'Lucas Igor']
console.log(friends)

const years = new Array(1991, 1984, 2008, 2022)
console.log(years)

console.log(friends[0])
console.log(friends[1])
console.log(friends[2])
console.log(friends.length)
console.log(friends[friends.length - 2])

friends[2] = 'Lucas Igor'
console.log(friends)

// arrays are not primitive, even if declared with const the values can be altered

const lucas = ['Lucas', 'Tabosa', 2022 - 1991, 'technical trainer', friends]
console.log(lucas)

const calcAge = function(birthYear){
    return 2022 - birthYear
}

const years = [1991, 1967, 2002, 2008, 2019, 1931]

for(let i = 0; i < years.length; i++){
    console.log(calcAge(years[i]))
}
*/

// ARRAY METHODS:
/*
const friends = ["Deilson", 'Rafael', 'Lucas Igor']

// add elements -> push()
// the return of the push function is the new length value
friends.push('Gorkem') // adds element at last position

// remove elements -> pop()
// returns the value of the removed element
friends.pop() // removed Gorkem -> last element

friends.unshift('Dharini') // adds element in the first index

friends.shift() // removes the first element -> Dharini

console.log(friends)
console.log(friends.indexOf('Rafael')) // returns the index of the element
console.log(friends.includes('Lucas Igor')) // returns true or false based on the existence of the element
console.log(friends.includes('Dharini')) // false

// includes tests with strict equality -> data type matters

*/
///////////////////////////////////////////////////////////////////////////////////
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/
/*

// function to calculate the tip -> inputs a value
const calcTip = function(bill) {
    if(bill >= 50 && bill <= 300){
        const tip = bill * 0.15
        console.log(`
        for a $${bill} the tip is 15%: $${tip}
        the total is $${bill + tip}
        `)
        return tip
    } else {
        const tip = bill * 0.20
        console.log(`
        for a $${bill} the tip is 20%: $${tip}
        the total is $${bill + tip}
        `)
        return tip
    }
}

const bills = [125, 555, 44]

// using for to iterate within the whole array and execute each time
// for(let i = 0; i < bills.length; i++){
//     const tips = []
//     console.log(tips.push(calcTip(bills[i])), tips)
// }

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]),]
console.log(tips)

*/
//////////////////////////////////////////////////////////////////////////////////////////////////////
// DATA STRUCTURE : OBJECTS

// recap of ARRAYS:
/*
const lucasFriends = [
    'Lucas Igor',
    'Deilson',
    'Rafael',
]

// OBJECTS:

const lucas = {
    firstName: 'Lucas',
    lastName: 'Tabosa',
    friends: ['Lucas Igor', 'Deilson', 'Rafael Britto']
}
*/
// console.log(lucas.friends)
// console.log(lucas.friends[0])

// lucas.friends[1] = 'Deilson Cisne'
// // dot notation
// console.log(lucas.friends)
// // bracket notation -> receives expressions -> produces values
// console.log(lucas['lastName'])

// const nameKey = 'Name'
// console.log(lucas['first' + nameKey])
// console.log(lucas['last' + nameKey])
// // computing the property name -> using the bracket notation

// const interestedIn = prompt('what do you want to know about Lucas? choose between firstName, lastName, friends')

// console.log(interestedIn)
// console.log(lucas[interestedIn])

// if(lucas[interestedIn]){
//     console.log(lucas[interestedIn])
// } else {
//     console.log('Wrong request')
// }
/*
lucas.location = 'Fortaleza, Ceará'
console.log(lucas)

// Challenge
// write: Lucas has 3 friends, and the best friend is Lucas Igor

console.log(`${lucas.firstName} has ${lucas.friends.length} friends, and the best friend is ${lucas.friends[0]}`)

*/ /*

const lucas = {
    firstName: 'Lucas',
    lastName: 'Tabosa',
    birthyear: 1991,
    job: 'technical trainer',
    friends: ['Rafael', 'Deilson', 'Lucas Igor'],
    hasDriverLicense: true,

    // function expression -> value assigned to a variable, returns a value, necessary to be used in objects
    // calcAge: function(birthYear) {
    //     return 2022 - birthYear
    // }


    // 'this' represents the object that calls the function
    // calcAge: function () {
    //     console.log(this)
    //     return 2022 - this.birthyear
    // }


    calcAge: function () {
       return this.age = 2022 - this.birthyear
    }
}

console.log(lucas.calcAge())
console.log(lucas.age)
// console.log(lucas['calcAge'](1991)) // arg should not be hardcoded
*/
/*
// challenge : 'Lucas is a 31 years old technical trainer, and he can/cannot drive"

const lucas = {
    firstName: 'Lucas',
    lastName: 'Tabosa',
    birthyear: 1991,
    job: 'technical trainer',
    friends: ['Rafael', 'Deilson', 'Lucas Igor'],
    hasDriverLicense: false,

    calcAge: function() {
        return this.age = 2022 - this.birthyear
    },

    showMessage: function() {
        return `${this.firstName} is a ${this.calcAge()} years old ${this.job}, and he ${this.hasDriverLicense ? 'can' : 'cannot'} drive`
    }
}

console.log(lucas.showMessage())
*/
///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/ /*
const john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = (this.mass / (this.height ** 2)).toFixed(0)
        return this.bmi
    }
}
const mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = (this.mass / (this.height ** 2)).toFixed(0)
        return this.bmi
    }
}

if(john.calcBMI() > mark.calcBMI()){
    console.log(`${john.firstName + john.lastName}'s BMI is higher than ${mark.firstName}`)
} else {
    console.log(`${mark.firstName} ${mark.lastName}'s BMI is higher than ${john.firstName} (${mark.bmi} x ${john.bmi})`)
}
*/
// LOOPS
// console.log('lifting repetition 1')
// console.log('lifting repetition 2')
// console.log('lifting repetition 3')
// console.log('lifting repetition 4')
// console.log('lifting repetition 5')
// console.log('lifting repetition 6')
// console.log('lifting repetition 7')
// console.log('lifting repetition 8')
// console.log('lifting repetition 9')
// console.log('lifting repetition 10')

// FOR loops keeps running while condition is TRUE
// for(let rep = 0; rep <= 10; rep++){
//     console.log(`lifting repetition ${rep}`)
// }

//LOOPING THOUGH ARRAYS
//  const lucasArray = [
//      'Lucas',
//      'Tabosa',
//      2022 - 1991,
//      'technical trainer',
//      ['Lucas Igor', 'Deilson', 'Rafael Britto'],
//      true
//  ]

//  const types = []

//  for (let i = 0; i < lucasArray.length; i++){
//     //  const upper = typeof lucasArray[i] === 'string' ? lucasArray[i].toUpperCase() : ''
//     // reading from lucas array
//      console.log(lucasArray[i], typeof lucasArray[i])
//      // filling an array
//      types.push(typeof lucasArray[i])
//      // +1 way
//     //  types[i] = typeof lucasArray[i]
//  }

//  console.log(types)

//  const years = [1991, 2007, 1969, 2020]
// const ages = []

//  for(let i = 0; i < years.length; i++){
//     ages.push(2022 - years[i])
//  }

//  console.log(ages)

// continue & break
// const lucasArray = [
//   "Lucas",
//   "Tabosa",
//   2022 - 1991,
//   "technical trainer",
//   ["Lucas Igor", "Deilson", "Rafael Britto"],
//   true,
// ];

// const types = [];

// console.log("----------- regular loop ----------------");
// for (let i = 0; i < lucasArray.length; i++) {
//   // only loops according to the condition:
//   console.log(lucasArray[i], typeof lucasArray[i]);
// }
// console.log(
//   "--------------- loops all type string, skips what is not a string ----------------"
// );
// for (let i = 0; i < lucasArray.length; i++) {
//   // only loops according to the condition:
//   if (typeof lucasArray[i] !== "string") continue;
//   console.log(lucasArray[i], typeof lucasArray[i]);
// }

// console.log("----- breaks the loop when finding the first number ---------");
// for (let i = 0; i < lucasArray.length; i++) {
//   // only loops according to the condition:
//   if (typeof lucasArray[i] === "number") break;
//   console.log(lucasArray[i], typeof lucasArray[i]);
// }
////////////////////////////////////////////////////////////////////////////////////////////////////
// FUN WITH LOOPS
// const lucas = [
//   "Lucas",
//   "Tabosa",
//   2022 - 1991,
//   "technical Trainer",
//   ["Lucas Igor", "Deilson", "Rafael Britto"],
// ];

// for (let i = lucas.length - 1; i >= 0; i--) {
//   console.log(lucas[i]);
// }

// for (let exercise = 1; exercise <= 3; exercise++){
//     console.log(`------------ starting exercise ${exercise} ------------------`)

//     for (let rep = 1; rep <= 5; rep++){
//         console.log(`--- > lifting repetition ${rep}`)
//     }
// }
////////////////////////////////////////////////////////////////////////////////////////////////////
// WHILE LOOP

// for (let rep = 1; rep <= 10; rep++){
//     console.log(`lifting repetition ${rep}`)
// }

// let rep = 1;

// while (rep <= 10) {
//   console.log(`WHILE: lifting repetition ${rep}`);

//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1
// console.log(dice)

// while (dice !== 6){
//     console.log(`you rolled a : ${dice}`)
//     dice = Math.trunc(Math.random() * 6) + 1
//     if(dice == 6){
//         console.log('loop is about to end...')
//     }
// }
/////////////////////////////////////////////////////////////////////////////////////////////////////
// FINAL CODING CHALLENGE
/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tips = []
let totals = []

const calcTip = function (bill) {
    if(bill >= 50 && bill <= 300){
        const tip = bill * 0.15
        // console.log(`the bill is ${bill} and the tip is 15%: ${tip}`)
        return tip
    } else {
        // console.log(`the bill is ${bill} and the tip is 20%: ${tip}`)
        return bill * 0.2
    }
  }

for (let i = 0; i < bills.length; i++){
    tips.push(calcTip(bills[i]))
    totals.push(bills[i] + tips[i])
    console.log(` -- the bill was $${bills[i]} and the tip is ${bills[i] >= 50 && bills[i] <= 300 ? '15%' : '20%'}: $${tips[i]}`)

    let totalsIndex = totals.indexOf(totals[i])
    let billsIndex = bills.indexOf(bills[i])

    if( billsIndex === totalsIndex){
        console.log(`
         ------------------
         the TOTAL is $${totals[i]}
         ------------------`)
    }
}

const calcAvg = function(arr){
    let sum = 0
    for (let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    const avg = (sum / arr.length)
    return `the average of all the bills is: $${avg}`
}

console.log(calcAvg(bills))
console.log(calcAvg(tips))
console.log(calcAvg(totals))

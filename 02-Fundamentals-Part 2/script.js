'use strict'
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

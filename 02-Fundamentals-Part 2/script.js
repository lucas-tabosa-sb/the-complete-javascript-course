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
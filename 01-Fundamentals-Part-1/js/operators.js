/* const targetYear = 2022;

const ageJonas = targetYear - 1991;
const ageSarah = targetYear - 1987;

console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, Math.ceil(ageJonas / 2));

const firstName = "lucas";
const lastName = "tabosa";
console.log(firstName + " " + lastName);

let x = 10 + 5; // 15
x += 10 // prints x + 10 -> 25, from the previous step: 10 + 15
x *= 10 // same as before, but multiplying -> prints 250
x++ // increments 1 to x -> x + 1
x-- // decrements 1 to x -> x - 1
console.log(x)

// comparison operator
console.log(ageJonas > ageSarah) // false
console.log(ageJonas < ageSarah) // true
console.log(ageSarah >= 18) // true
console.log(ageSarah <= 18) // false

*/

// PRECEDENCE OF OPERATIONS
const now = 2037
const ageJonas = now - 1991
const ageSarah = now - 2018

let x, y
x = y = 25 - 10 - 5

console.log(x, y)
console.log(ageJonas, ageSarah, ageJonas+ageSarah)

const averageAge = (ageJonas + ageSarah) / 2
console.log(averageAge)

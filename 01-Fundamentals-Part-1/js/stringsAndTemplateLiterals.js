const firstName = 'Lucas'
const job = 'Technical Trainer'
const birthYear = 1991
const currentYear = 2022

// old way

const lucas = "I'm " + firstName + ", a " + (currentYear - birthYear) + " years old " + job + "!"

console.log(lucas)

// template literal -> ES6

const lucasES6 = `I'm ${firstName}, a ${currentYear - birthYear} years old ${job}!`
console.log(lucasES6)

// multiple lines
console.log(`multiple lines
can easily be written
using backticks
`)
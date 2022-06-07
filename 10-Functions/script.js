'use strict'

// const bookings = []

// const createBooking = function(flightNum, numPassengers = 1, price = 'USD $199') {

//     // ES5 way to do:
//     // numPassengers = numPassengers || 1
//     // price = price || 'USD $100'

//     const booking = {
//         flightNum,
//         numPassengers,
//         price
//     }
//     console.log(booking)
//     bookings.push(booking)
// }

// createBooking('LH123')
// createBooking('LH123', 2, 800)

// const flight = 'LH234'
// const lucas = {
//     name: 'Lucas Tabosa',
//     passport: 123983748498
// }

// const checkIn = function(flightNumber, passenger){
//     flightNumber = 'LH999'
//     passenger.name = 'Mr. ' + passenger.name

//     if(passenger.passport === 123983748498){
//         alert('check in')
//     } else {
//         alert('Wrong passport')
//     }
// }

// // checkIn(flight, lucas)
// // console.log(flight)
// // console.log(lucas)

// const newPassport = function(person){
//     person.passport = Math.trunc(Math.random() * 10000000000)
// }

// newPassport(lucas)
// checkIn(flight, lucas)

// const oneWord = function(str){
//     return str.replace(/ /g, '').toLowerCase()
// }

// const upperFirstWord = function(str){
//     const [first, ...others] = str.split(' ')
//     return [first.toUpperCase(), ...others].join(' ')
// }

// // higher order function
// const transformer = function(str, fn){
//     console.log(`original string: ${str}`)
//     console.log(`transformed string: ${fn(str)}`)

//     console.log(`transformed by: ${fn.name}`)
// }

// transformer('javascript is the best', upperFirstWord)
// transformer('javascript is the best', oneWord)

// const greet = function(greeting){
//     return function(name){
//         console.log(`${greeting} ${name}`)
//     }
// }

// const greeterHey = greet('Hey') // stores the greet function value

// greeterHey('Jonas')
// greeterHey('Steven')
// greet('Hello')('Lucas')

const greet = (greeting) => (personName) => console.log(`${greeting} ${personName}`) 

greet('Hey')('Lucas')
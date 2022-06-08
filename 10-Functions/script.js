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

// const greet = (greeting) => (personName) => console.log(`${greeting} ${personName}`)
// greet('Hey')('Lucas')

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     book: function(flightNum, name){
//         console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`)
//         this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
//     }
// }

// lufthansa.book(239, 'Lucas Tabosa')
// lufthansa.book(635, 'Jonas Schmedtmann')
// console.log(lufthansa)

// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// }

// const book = lufthansa.book
//does not work
// book(23, 'Sarah Williams')

// manipulates the this keyword with the call() function, making it so the this keyworkd points to the object that is passed in the first argument

// book.call(eurowings, 23, "Sarah Williams")
// console.log(eurowings)
// book.call(lufthansa, 123, "Mary Cooper")
// console.log(lufthansa)

// // apply method -> does the same as call() but not receiving arguments, receives an array, not so used anymore

// const flightData = [528, "George Cooper"]
// book.apply(eurowings, flightData)
// console.log(eurowings)
// // the same as apply -> spreading the array
// book.call(eurowings, ...flightData)
// console.log(eurowings)

// // BIND method
// // manually sets the this keyword
// const bookEW = book.bind(eurowings)
// const bookLH = book.bind(lufthansa)

// bookEW(478, 'Esteven Williams')
// bookLH(498, 'Lucas Tabosa')
// console.log(eurowings, lufthansa)

// const bookEW23 = book.bind(eurowings, 23)
// bookEW23('Maria Porcina')
// console.log(eurowings)

// with event listeners
// lufthansa.planes = 300
// const buyPlane = function(){
//     console.log(this)
//     this.planes++
//     console.log(this.planes)
// }

// const buyPlanes = buyPlane.bind(lufthansa)

// document.querySelector('.buy').addEventListener('click', buyPlanes) // this keyword points to the element clicked
// // document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

// // partial application

// const addTax = (rate, value) => value + value * rate

// console.log(addTax(0.1, 200))

// const addVAT = addTax.bind(null, 0.23) // presets the rate and repeats the functionality from addTax
// console.log(addVAT(200))

// const addTax2 = function(rate){
//     return function(value){
//         console.log(value + value * rate)
//     }
// }

// addTax2(0.1)(200)

// const addTax3 = (rate) => (value) => console.log(value + value * rate)
// addTax3(0.1)(200)
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

///////////////////////////////////////
// Coding Challenge #1

/*
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)

  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//     question: 'What is your favourite programming language',
//     options: ['0: Javascript','1: Python', '2: Rust', '3: C++'],
//     answers: new Array(4).fill(0),
//     registerNewAnswer(){
//         const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write the option number)`))
//         console.log(answer)

//         typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++

//         this.displayResults()
//         this.displayResults('string')
//     },

//     displayResults(type = 'array'){
//         if(type === 'array'){
//             console.log(this.answers)
//         } else if (type === 'string'){
//             console.log(`Poll results are ${this.answers.join(', ')}`)
//         }
//     }
// }

// document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll))

// poll.displayResults.call({ answers: [5, 2, 3]}, 'string')
// poll.displayResults.call({ answers: [1, 5, 3, 9, 7, 1]}, 'string')
// poll.displayResults.call({ answers: [1, 5, 3, 9, 7, 1]})


// Immediately Invoked Functions Expression

// const runOnce = function(){
//     console.log('this will never run again')
// }

// runOnce()

// (function(){
//     console.log('this will never run again')
// })()

// CLOSURES ----

// const secureBooking = function(){
//     let passengerCount = 0

//     return function() {
//         passengerCount++
//         console.log(`${passengerCount} passengers`)
//     }
// }

// const booker = secureBooking()

// booker()
// booker()
// booker()

// console.dir(booker)

// let f // defined in global scope
// const g = function(){
//   const a = 7
//   f = function (){
//     console.log(a * 2)
//   }
// }

// const h = function(){
//   const b = 777
//   f = function() {
//     console.log(b*2)
//   }
// }


// g() // variable env is no longer existent
// f() // access g() variable env regardless
// console.dir(f) // check closure - a
// h() // reassigns f variable
// f() // new function - closed on h() variable env
// console.dir(f) // check closure - b

// example 2

// after the call it is not on the execution context anymore, so the variables in it are technically gone from the Variable Environment
// const boardPassengers = function(n, wait){
//   const perGroup = n/3

//   // will work independently of the boardPassenger fn, but still able to use the variables in it - executing in the global scope
//   setTimeout(function(){
//     console.log(`We're now boardind all ${n} passengers`)
//     console.log(`Thee are 3 groups, each with ${perGroup} passengers`)
//   }, wait * 1000)

//   console.log(`Will start boarding in ${wait} seconds`)
// }

// const perGroup = 1000 // closure has higher priority over scope chain, so the timeout will still use the perGroup in the closure

// boardPassengers(180, 3)


///////////////////////////////////////
// Coding Challenge #2

/*
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

const changeColor = function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
}

// when the callback is executed the changeColor is long gone, but still the cb is attached to the body element, and also has access to the variable environment from the changeColor function

changeColor();

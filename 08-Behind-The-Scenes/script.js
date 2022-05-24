"use strict"

// // global scope
// function calcAge(birthYear) {
// 	const age = 2022 - birthYear // age and birthYear are accessible by any function inside the same scope
// 	console.log(firstName) // not in function scope, but in global scope, so it will work

// 	// function scope -> scope chain lookup
// 	function printAge() {
// 		const output = `you are ${age}, born in ${birthYear}`
// 		console.log(output)
// 	}

// 	printAge()

// 	return age
// }

// //global variable
// const firstName = "Lucas"

// calcAge(1991)

// HOISTING AND TDZ
//
// console.log(me)
// console.log(job)
// console.log(year)

// var me = "Lucas"
// let job = "tech trainer"
// const year = 1991

// let age = 30
// let oldAge = age // refers to the first value of age
// age = 31

// console.log(age)
// console.log(oldAge)

// const me = {
// 	name: "Lucas",
// 	age: 30,
// }

// const friend = me
// friend.age = 28

// console.log("Friend", friend)
// console.log("Me", me)

// objects, arrays, function, many more -> reference types -> stored in the heap of the engine
// primitives -> stored in call stack

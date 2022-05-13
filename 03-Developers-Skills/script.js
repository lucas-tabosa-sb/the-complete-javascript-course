"strict mode"

// PROBLEM
// We work for a company building a smart home thermometer.
// Our most recent task is this: "Given an array of temperatures of one day,
// calculate the temperature amplitude. Keep in mind that sometimes there might //// be an sensor error"

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5]

// 1 - understanding the problem
// - what is temperature amplitude? - difference between highest and lowest
// - how do we calculate the difference in max and min in an array?
// - what's a sensor error and what to do when it occurs?

// breaking into sub-problems
// - how to ignore errors ✅
// - find max value in temperature array ✅
// - find min value in array ✅
// - subtract min from max and return it -> amplitude ✅

// const calcTempAmplitude = function (temps) {
//   let max = temps[0]
//   let min = temps[0]

//   for (let i = 1; i < temps.length; i++) {
//     const currentTemp = temps[i]
//     if (typeof currentTemp !== "number") continue
//     if (currentTemp > max) {
//       max = currentTemp
//     } else if (currentTemp < min) {
//       min = currentTemp
//     }
//   }
//   console.log(max, min)
//   return max - min
// }

// // calcTempAmplitude([3, 7, 4, 23])
// const amplitude = calcTempAmplitude(temperatures)
// console.log(amplitude)

// PROBLEM 2: FUNCTION NOW SHOULD RECEIVE 2 ARRAYS OS TEMPERATURES
// - WITH 2 ARRAYS DO WE NEED TO IMPLEMENT THE FUNCTION TWICE?
// ANSWER: JUST MERGE THE TWO ARRAYS

// SUBPROBLEM: HOW TO MERGE 2 ARRAYS?

// const calcTempAmplitudeNew = function (t1, t2) {
// 	const temps = t1.concat(t2)
// 	console.log(`two arrays merged into one: [${temps}]`)

// 	let max = temps[0]
// 	let min = temps[0]

// 	for (let i = 1; i < temps.length; i++) {
// 		const currentTemp = temps[i]
// 		if (typeof currentTemp !== "number") continue
// 		if (currentTemp > max) {
// 			max = currentTemp
// 		} else if (currentTemp < min) {
// 			min = currentTemp
// 		}
// 	}
// 	console.log(`max value is: ${max}, min value is: ${min}`)
// 	const amplitude = max - min
// 	return `amplitude is: ${amplitude}`
// }

// // calcTempAmplitude([3, 7, 4, 23])
// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 4])
// console.log(amplitudeNew)

// const measureKelvin = function () {
// 	const measurement = {
// 		type: "temperature",
// 		unit: "celsius",
// 		//fix the bug ✅
// 		value: Number(prompt("Degrees Celsius")), // prompt always returns a string
// 	}
// 	console.table(measurement)
// 	console.log(measurement.value)
// 	const kelvin = measurement.value + 273
// 	return kelvin
// }

// // identify the bug ✅
// console.log(measureKelvin())

// find the bug
// console.log the whole object

// const calcTempAmplitudeBug = function (t1, t2) {
// 	const temps = t1.concat(t2)
// 	console.log(`two arrays merged into one: [${temps}]`)

// 	let max = temps[0]
// 	let min = temps[0]

// 	// debugger -> will start the debugger on chrome
// 	for (let i = 1; i < temps.length; i++) {
// 		const currentTemp = temps[i]
// 		if (typeof currentTemp !== "number") continue
// 		if (currentTemp > max) {
// 			max = currentTemp
// 		} else if (currentTemp < min) {
// 			min = currentTemp
// 		}
// 	}
// 	console.log(`max value is: ${max}, min value is: ${min}`)
// 	const amplitude = max - min
// 	return `amplitude is: ${amplitude}`
// }

// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 1, 5])
// console.log(amplitudeBug)

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// UNDERSTAND THE PROBLEM:
// array transformed to string separated by ...
// what is the x days? -> index + 1

// breaking into sub-problems:
// transform array in strings
// transform each element to string with C
// strings need to contain day (index + 1)
// add '...' between elements

const data1 = [17, 21, 23]
const data2 = [12, 5, -5, 0, 4]

const printForecast = function (arr) {
	let str = ""
	for (let i = 0; i < arr.length; i++) {
		let day = i + 1
		str += `${arr[i]}℃ in ${day} ${day === 1 ? "day ... " : "days ... "}`
	}
	console.log("... " + str)
}

printForecast(data1)
printForecast(data2)

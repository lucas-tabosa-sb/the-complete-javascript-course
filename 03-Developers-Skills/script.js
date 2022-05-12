"strict mode"

// PROBLEM
// We work for a company building a smart home thermometer.
// Our most recent task is this: "Given an array of temperatures of one day,
// calculate the temperature amplitude. Keep in mind that sometimes there might //// be an sensor error"

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5]

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

const calcTempAmplitudeNew = function (t1, t2) {
	const temps = t1.concat(t2)
	console.log(`two arrays merged into one: [${temps}]`)

	let max = temps[0]
	let min = temps[0]

	for (let i = 1; i < temps.length; i++) {
		const currentTemp = temps[i]
		if (typeof currentTemp !== "number") continue
		if (currentTemp > max) {
			max = currentTemp
		} else if (currentTemp < min) {
			min = currentTemp
		}
	}
	console.log(`max value is: ${max}, min value is: ${min}`)
	const amplitude = max - min
	return `amplitude is: ${amplitude}`
}

// calcTempAmplitude([3, 7, 4, 23])
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 4])
console.log(amplitudeNew)

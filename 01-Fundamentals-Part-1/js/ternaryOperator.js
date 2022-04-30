// const age = 27

// age >= 18 ? console.log('you can drink alcohol 🍹') : console.log('should stick to water 💦')

// // operator always produces a value -> expression

// const drink = age >= 18 ? 'alcohol 🍹' : 'water 💦'
// console.log(`you should drink ${drink}`)

// // challenge #4
// /*
//     steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant.
//     In his country, it's usual to tip 15% if the bill value is between 50 and 300 if the value is different the tip is 20%

//     1. your task is to calculate the tip, depending on the bill value, Create a variable called 'tip' for this. Its not allowed to use if/else statement.
//     2. print a string to the console containing the bill value, the tip and  the final value (bill + tip)

//     test data for bill values: 275, 40 and 430

// */

// // const bill = 40
// const bill = 275
// // const bill = 430

// const fifteenPercent = (.15 * bill).toFixed(2)
// const twentyPercent = (.2 * bill).toFixed(2)

// const tip = bill >= 50 && bill <= 300 ?
// console.log(`the tip is 15% = $${fifteenPercent}`)  : console.log(`the tip is 20% = $${twentyPercent}`)


function find_max(nums) {
     let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
     for (let num of nums) {
     if (num > max_num) {
     max_num += 1// (Fill in the missing line here)
     }
     }
     return max_num;
     }
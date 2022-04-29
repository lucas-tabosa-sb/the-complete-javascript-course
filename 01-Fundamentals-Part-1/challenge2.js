////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

const people = {
    mark: {
        mass: 78,
        height: 1.69
    },
    john: {
        mass: 92,
        height: 1.95
    }
}

const markBMI = parseInt(people.mark.mass / (people.mark.height ** 2))
const johnBMI = parseInt(people.john.mass / (people.john.height ** 2))

if(markBMI > johnBMI){
    console.log(`Mark's BMI is ${markBMI} and it is bigger than John's: ${johnBMI}`)
} else {
    console.log(`Mark's BMI is ${markBMI} and it is not bigger than John's which is ${johnBMI}`)
}

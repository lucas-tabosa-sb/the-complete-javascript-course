////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// TEST DATA 1:
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

const BMI = function(mass, height, name){
    const result =  parseInt(mass / (height ** 2))
    console.log(name + "'s " + "BMI: " + result )
    return result
}

const markBMI = BMI(people.mark.mass, people.mark.height, 'Mark')
const johnBMI = BMI(people.john.mass, people.john.height, 'John')

const markHigherBmi = markBMI > johnBMI
const markLowerBmi = johnBMI < markBMI
console.log(markHigherBmi ? 'Marks BMI is higher than Johns' : false)
console.log(markLowerBmi)
// expression is a piece of code that produces a value:
3 + 4
1991
true && false && !false

// statement is a bigger piece of code which does not produce value on itself -> sentences that translates actions

//statement:
if ( 23 > 10 ){
    const str = '23 is bigger than 10' // the string is an expression
    console.log(str)
}

console.log(`I'm ${2022 - 1991} years old`)

console.log(`I'm ${2022 - 1991} years old ${if (...)}`) // produces an error because template literals dont accept statements


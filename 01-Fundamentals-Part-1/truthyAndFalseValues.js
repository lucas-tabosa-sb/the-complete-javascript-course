// five falsy values:
/*
    -> 0
    -> 'empty string'
    -> undefined
    -> null
    -> NaN
*/

console.log(Boolean(0))
console.log(Boolean(''))
console.log(Boolean(undefined))
console.log(Boolean(null))
console.log(Boolean(NaN))

const money = 0 // when converted to boolean by the IF statement -> will turn out false, because 0 is falsy -> falls into the else statement

if(money){
    console.log('dont spend it all')
} else {
    console.log('you should get a job')
}

let height // height doesnt have a value assigned, when converted to boolean -> undefined returns false -> falls into the else statement
if(height){
    console.log('height is defined')
} else {
    console.log('height is UNDEFINED')
}
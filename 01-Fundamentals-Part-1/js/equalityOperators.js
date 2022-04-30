const age = 18

if(age === 18) console.log('yes, you can drink now')


// === strict, the value and data type must match
console.log('18' === 18) // false
// == loose comparison, value must match, data type doesnt matter
console.log('18' == 18) // true

const favNum = prompt("What's your favorite number?") // can be converted using the Number() method
console.log(favNum)
console.log(typeof favNum)

if( favNum === 23) {
    console.log('Cool, 23 is a good number')
} else {
    console.log('the number you inserted is actually a string, not a number')
}
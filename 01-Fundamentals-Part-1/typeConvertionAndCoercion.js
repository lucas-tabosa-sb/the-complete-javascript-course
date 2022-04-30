const inputYear = '1991'
console.log(Number(inputYear) + 18)
console.log(inputYear + 18)

console.log(Number('Jonas'))

console.log(String(1991))
console.log(typeof String(2009) )

// type convertion, you can convert to Number. String and Boolean

// type coertion
// the + operation forces a convertion to generate a string
console.log('I am ' + 23 + ' years old')
// - operator converts the strings to numbers
console.log('23' - '10' - 3)
// multiply and division operations converts strings to numbers
console.log('23' * '2')

let n = '1' + 1 // string = '11'
n = n - 1 // minus operator changes the string '11' to number 11 and subtracts 1 = 10
console.log(n)

console.log('10' - '4' - '3' - 2 + '5') // 15

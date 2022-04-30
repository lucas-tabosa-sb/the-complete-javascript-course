const hasDriverLicense = true // A
const hasGoodVision = false // B

// AND operator
console.log(hasDriverLicense || hasGoodVision)
console.log(hasDriverLicense && hasGoodVision)
console.log(!hasDriverLicense)

if(hasDriverLicense || hasGoodVision){
    console.log('she is allowed to drive')
} else {
    console.log('someone else should drive')
}
// forbids to do somethings, also creates visible errors in console for the dev to see
'use strict'

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true
if (hasDriversLicense) console.log('I can drive :D')

// const interface = 'Audio' // interface is a reserved word
// const private = 123 // private is a reserved word

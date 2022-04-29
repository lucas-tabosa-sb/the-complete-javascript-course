/*
  let js = "amazing";
  console.log(40 + 8 + 23 + 10);
  console.log("Jonas");

  // variable declaration
  let firstName = "Lucas";
  console.log(firstName);

  // Part 1 Assignments:
  let country = "Brazil";
  let continent = "South America";
  let population = "200M";
  console.log(
    "country: " +
      country +
      ", continent: " +
      continent +
      " - population: " +
      population
  );
*/


// DATA TYPES
/*
   Number
   String
   Boolean - true or false
   undefined = value taken by a variable that is not yet defined : 'empty value'
   null = also an empty value
   Symbol
   BigInt
*/


// DECLARING VARIABLES:

//  let -> to set values that will probably change later
let age = 30
age = 31
//  const -> used to set variables which value should not change at all / needs an initial value
const birthYear = 1991
birthYear = 1990 
console.log(birthYear) // will cause error
// var -> should be avoided: works similarly as let
// 'use strict';

// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

/////////////////////////////////////////////////
// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };

  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };

  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };

  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };

  const accounts = [account1, account2, account3, account4];

// FUNCTIONS:
const displayMovements = function (movements, sort = false) {
    containerMovements.innerHTML = '';
  
    const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  
    movs.forEach(function (mov, i) {
      const type = mov > 0 ? 'deposit' : 'withdrawal';
  
      const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
        i + 1
      } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
      `;
  
      containerMovements.insertAdjacentHTML('afterbegin', html);
    });
  };

  const calcDisplayBalance = function (acc) {
    acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
    labelBalance.textContent = `${acc.balance}€`;
  };

  const calcDisplaySummary = function(movements){
    const incomes = movements.filter(mov => mov > 0)
        .reduce((acc, mov) => acc + mov, 0)
  }

  calcDisplaySummary(account1.movements)

  const createUsernames = function (accs) {
    accs.forEach(function (acc) {
      acc.username = acc.owner
        .toLowerCase()
        .split(' ')
        .map(name => name[0])
        .join('');
    });
  };
  createUsernames(accounts);


////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// // ARRAYS ARE OBJECTS, THEREFORE THEY HAVE ACCESS TO METHODS

// // let arr = ['a', 'b', 'c', 'd', 'e']

// // //SLICE METHOD -> returns a new array with the extracted parts -> starting from index 2
// // console.log('------------- slice method -----------------') 
// // console.log(arr.slice(2))
// // console.log(arr.slice(2, 4)) // END parameter is not included in the output
// // console.log(arr.slice(-2)) // starts from the end
// // console.log(arr.slice(-1)) // gets the last element
// // console.log(arr.slice(1, -2))
// // console.log(arr.slice()) // shallow copy of the original array -> same as spread operator

// // // SPLICE -> mutates the original array
// // console.log('------------- splice method -----------------')
// // console.log(arr)
// // arr.splice(-1)
// // console.log(arr)
// // arr.splice(1, 2)
// // console.log(arr)

// // console.log('------------- reverse method -----------------')

// // arr = ['a', 'b', 'c', 'd', 'e']
// // const arr2 = ['j', 'i', 'h', 'g', 'f']
// // console.log(arr2.reverse()) // mutates the original array
// // console.log(arr2)

// // console.log('------------- concat method -----------------')
// // const letters = arr.concat(arr2)
// // console.log(letters) // does not mutate the original one
// // console.log([...arr, ...arr2])

// // console.log('------------- join method -----------------')
// // console.log(letters.join(', ')) // string with the specified separator

// // const arr = [23, 11, 64]
// // console.log(arr[0])

// // console.log(arr.at(0))
// // console.log(arr[arr.length -1])
// // console.log(arr.slice(-1)[0])
// // console.log(arr.at(-1)) // negative starts counting fron the right (last element)

// // console.log('Lucas'.at(0))

// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

// // console.log('------FOR OF-------')
// // // for (const movement of movements){
// // for (const [i, movement] of movements.entries()){
// //     if(movement > 0){
// //         console.log(`Moviment ${i + 1}: you deposited ${movement}`)
// //     } else {
// //         console.log(`Moviment ${i + 1}: you withdrew ${Math.abs(movement)}`)
// //     }
// // }

// // console.log('------FOR EACH-------')
// // // parameters = current element -> current index -> entire array
// // movements.forEach(function(el, i, arr) {
// //     if( el > 0){
// //         console.log(`Moviment ${i + 1}: you deposited ${el}`)
// //     } else {
// //         console.log(`Moviment ${i + 1}: you withdrew ${Math.abs(el)}`)
// //     }
// // })

// // continue and break won't work on forEach

// // each inner array is an ENTRY
// // const currencies = new Map([
// //     ['USD', 'United States dollar'],
// //     ['EUR', 'Euro'],
// //     ['GBP', 'Pound Sterling']
// // ])
// // console.log(currencies)

// // // same parameters as the forEach in an array
// // currencies.forEach(function(value, key, map){
// //     console.log(`${key}: ${value}`)
// // })

// // //SET - doesnt have keys
// // const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])

// // console.log(currenciesUnique)
// // currenciesUnique.forEach(function(value, _, map){
// //     console.log(`${value}: ${value}`)
// // })
// ///////////////////////////////////////
// // Coding Challenge #1

// /*
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

// Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

// 1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
// 4. Run the function for both test datasets

// HINT: Use tools from all lectures in this section so far 😉

// TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

// GOOD LUCK 😀
// */

// // let julia1 = [3, 5, 2, 12, 7]
// // let julia2 = [9, 16, 6, 8, 3]
// // let kate1 = [4, 1, 15, 8, 3]
// // let kate2 = [10, 5, 6, 1, 4]

// // const checkDogs = function(dogsJulia, dogsKate){
// //     const dogsJuliaCorrected = dogsJulia.slice()
// //     dogsJuliaCorrected.splice(0, 1) // removes 1 element from index 0
// //     dogsJuliaCorrected.splice(-2) // removes 2 last elements
// //     const dogs = dogsJuliaCorrected.concat(dogsKate) // concats two arrays

// //     console.log(dogs)
// //     console.log(dogsJuliaCorrected)

// //     dogs.forEach(function(dog, i){
// //         if(dog>=3){
// //             console.log(`Dog number ${i+1} is an adult, and is ${dog} years old`)
// //         } else {
// //             console.log(`Dog number ${i+1} is still a puppy`)
// //         }
// //     })
// // }

// // checkDogs(julia1, kate1)
// // console.log('-----------test data 2--------------')
// // checkDogs(julia2, kate2)

// // MAP / FILTER AND REDUCE

// // const eurToUsd = 1.1

// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

// // //map
// // // const movementsUSD = movements.map(function(mov) {
// // //     return (mov * eurToUsd).toFixed(0)
// // // })

// // //map optimized
// // // returns the value automatically
// // const movementsUSD = movements.map(mov => (mov * eurToUsd).toFixed(0))

// // const movementsDescription = movements.map((mov, i) => {
// //    return `Movement ${i+1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
   
// // })

// // console.log(movementsDescription)

// // // map method has no side effect, it iterates in the whole array and returns a whole new array at the end

// // filter method
// // const deposits = movements.filter(function(mov){
// //     return mov > 0
// // })

// // console.log(deposits)

// // // with for loop
// // const depositsFor = []
// // for (const mov of movements){
// //   if(mov > 0){
// //     depositsFor.push(mov)
// //   }
// // }

// // console.log(depositsFor)

// // const withdrawals = movements.filter(mov => {
// //     return mov < 0
// // })

// // console.log(withdrawals)

// // reduce method
// // const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
// // // returns a value, not an array

// // const balance = movements.reduce(function(acc, cur, i, arr){
// //   console.log(`iteration ${i}: ${acc}`)
// //   return acc + cur
// // }, 0)

// // console.log(balance)

// // let balanceFor = 0
// // for (const mov of movements){
// //   balanceFor += mov
// // }

// // console.log(balanceFor)

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]
const eurToUsd = 1.1


// filter returns an array -> map()
// map returns an array -> reduce()
// reduce returns a value
// it is only possible to chain if the previous method returns an array
const totalDepositsUSD = movements.filter(mov => mov > 0)
    .map(mov => mov * eurToUsd)
        .reduce((acc, mov) => Math.floor(acc + mov, 0))

console.log(totalDepositsUSD)
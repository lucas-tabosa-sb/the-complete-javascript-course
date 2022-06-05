// // "use strict"

// // const restaurant = {
// // 	name: "Classico Italiano",
// // 	location: "Via Angelo Tavanti 23, Firenze, Italy",
// // 	categories: ["Italian", "Pizzeria", "Vegetarian", "organic"],
// // 	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
// // 	mainMenu: ["Pizza", "Pasta", "Risotto"],

// // 	openingHours: {
// // 		thu: {
// // 			open: 12,
// // 			close: 22,
// // 		},
// // 		fri: {
// // 			open: 11,
// // 			close: 23,
// // 		},
// // 		sat: {
// // 			open: 0, //24h
// // 			close: 24,
// // 		},
// // 	},

// // 	order: function (starterIndex, mainIndex) {
// // 		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
// // 	},
// // }

// // // DESTRUCTURING OBJECTS

// // // const { name, openingHours, categories } = restaurant
// // // console.log(name)
// // // console.log(openingHours)
// // // console.log(categories)

// // // const {
// // // 	name: restaurantName,
// // // 	openingHours: hours,
// // // 	categories: tags,
// // // } = restaurant
// // // console.log(restaurantName)
// // // console.log(hours)
// // // console.log(tags)

// // // MUTATING VARIABLES IN OBJECTS
// // let a = 111
// // let b = 999

// // const obj = { a: 23, b: 7, c: 14 }

// // let newObj = {...obj}
// // newObj.a = a
// // newObj.b = b
// // console.log(newObj)

// // // DESTRUCTURING ARRAYS
// // // const arr = [2, 3, 4]
// // // const a = arr[0]
// // // const b = arr[1]
// // // const c = arr[2]

// // // const [x, y, z] = arr

// // // console.log(x, y, z)
// // // console.log(arr)

// // // let [main, , secondary] = restaurant.categories
// // // console.log(main, secondary)

// // // let temp = main
// // // main = secondary
// // // secondary = temp
// // // console.log(main, secondary)

// // // [main, secondary] = [secondary, main]
// // // console.log(main, secondary)

// // // console.log(restaurant.order(2, 0))
// // // const [starter, main] = restaurant.order(2, 0)
// // // console.log(starter, main)

// // // const nested = [2, 4, [5, 6]]
// // // // const [i, , j] = nested
// // // // console.log(i, j)
// // // const [i, , [j, k]] = nested
// // // console.log(i, j, k)
// // // // default values
// // // // pretend we don't know the array

// // // const [p = 1, q = 1, r = 1] = [8, 9]
// // // console.log(p, q, r)

// // spread operator
// // const arr = [7, 8, 9]
// // const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
// // console.log(badNewArr)

// // const goodNewArr = [1, 2, ...arr]
// // console.log(goodNewArr)

// // const mainMenuCopy = [...restaurant.mainMenu]
// // console.log(mainMenuCopy)

// // // iterables: arrays, strings, maps, sets, NOT OBJECTS

// // const str = 'Jonas'
// // const letters = [...str, '', 's']
// // console.log(letters)
// //////////////////////////////////////////////////////////////////////////////
// // REST OPERATOR

// // SHORT CIRCUITING
// // console.log(3 || 'Lucas')
// // console.log('' || 'Lucas') // empty string is falsy
// // console.log(true || 0)
// // console.log(undefined || null) // undefined is falsy

// ///////////////////////////////////////
// // Coding Challenge #1

// /*
// We're building a football betting app (soccer for my American friends 😅)!

// Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

// GOOD LUCK 😀
// // */

// // const game = {
// // 	team1: "Bayern Munich",
// // 	team2: "Borrussia Dortmund",
// // 	players: [
// // 		[
// // 			"Neuer",
// // 			"Pavard",
// // 			"Martinez",
// // 			"Alaba",
// // 			"Davies",
// // 			"Kimmich",
// // 			"Goretzka",
// // 			"Coman",
// // 			"Muller",
// // 			"Gnarby",
// // 			"Lewandowski",
// // 		],
// // 		[
// // 			"Burki",
// // 			"Schulz",
// // 			"Hummels",
// // 			"Akanji",
// // 			"Hakimi",
// // 			"Weigl",
// // 			"Hazard",
// // 			"Brandt",
// // 			"Sancho",
// // 			"Gotze",
// // 		],
// // 	],
// // 	score: "4:0",
// // 	scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
// // 	date: "Nov 9th, 2037",
// // 	odds: {
// // 		team1: 1.33,
// // 		x: 3.25,
// // 		team2: 6.5,
// // 	},
// // }

// // // 3.
// // const [players1, players2] = game.players
// // console.log(players1, players2)

// // console.log("-----------------------------------------------")

// // const [gk, ...fieldPlayers] = players1
// // console.log(`GK: ${gk}`, fieldPlayers)

// // console.log("-----------------------------------------------")

// // const allPlayers = [...players1, ...players2]
// // console.log(allPlayers)

// // console.log("-----------------------------------------------")

// // const players1Final = [...players1, "Thiago", "Coutinho", "Periscic"]
// // console.log(players1Final)

// // console.log("-----------------------------------------------")

// // const { team1, x: draw, team2 } = game.odds
// // console.log(`
// //     ${game.team1} odds of winning: ${team1}
// // 	chances of draw: ${draw}
// // 	odds of ${game.team2} winning: ${team2}

// // `)

// // console.log("-----------------------------------------------")

// // const printGoals = function (...players) {
// // 	console.log(players)
// // 	console.log(`${players.length} goals were scored`)
// // }

// // printGoals("Davies", "Muller", "Lewandowski", "Kimmich")
// // printGoals("Davies", "Muller")

// // console.log("-----------------------------------------------")

// // team1 < team2 && console.log(`${game.team1} is more likely to win`)
// // team1 > team2 && console.log(`${game.team2} is more likely to win`)

// const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri','sat','sun']

// const openingHours = {
// 	[weekdays[3]]: {
// 		open: 12,
// 		close: 22
// 	},
// 	[weekdays[4]]: {
// 		open: 11,
// 		close: 23
// 	},
// 	sat: {
// 		open: 0,
// 		close: 24
// 	},
// }

// // OBJECT LITERAL
// const restaurant = {
// 	name: "Classico Italiano",
// 	location: 'Via Angelo Tavanti 23, Firenze, Italy',
// 	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// 	starterMenu: ['Foccacia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],mainMenu: ['Pizza', 'Pasta', 'Risotto'],

// 	// ES6 enhanced object literals
// 	openingHours,

// 	// no need for function declaration anymore with enhanced objects
// 	order(starterIndex, mainIndex){
// 		return [this.starterIndex[starterIndex], this.mainMenu[mainIndex]]
// 	},

// 	orderDelivery: function ({
// 			starterIndex = 1,
// 			mainIndex = 0,
// 			time = '20:00',
// 			address,
// 	}){
// 		console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
// 	},

// 	orderPasta: function(ing1, ing2, ing3){
// 		console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`)
// 	},

// 	orderPizza: function(mainIngredient, ...otherIngredients){
// 		console.log(mainIngredient)
// 		console.log(otherIngredients)
// 	}
// }

// console.log(restaurant)
// // optional chain ing
// console.log(restaurant.openingHours.mon?.open)
// console.log(restaurant.openingHours.fri.open)

// // example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

// for (const day of days){
// 	console.log(day)
// 	// using a variable as an attribute name -> put in []
// 	const open = restaurant.openingHours[day]?.open ?? 'closed'
// 	console.log(`On ${day}, we open at ${open}`)
// }

// // methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist')
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist')

// // arrays
// const users = [
// 	{name: 'lucas', email: 'test@test.com'}
// ]

// console.log(users[0]?.name ?? 'array is empty')
// console.log(users[3]?.name ?? 'no array item at that index')

// LOOPING OBJECTS
// for (const day of Object.keys(openingHours)){
// 	console.log(day)
// }

///////////////////////////////////////
// Coding Challenge #2

/*
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// const game = {
// 	team1: 'Bayern Munich',
// 	team2: 'Borrussia Dortmund',
// 	players: [
// 	  [
// 		'Neuer',
// 		'Pavard',
// 		'Martinez',
// 		'Alaba',
// 		'Davies',
// 		'Kimmich',
// 		'Goretzka',
// 		'Coman',
// 		'Muller',
// 		'Gnarby',
// 		'Lewandowski',
// 	  ],
// 	  [
// 		'Burki',
// 		'Schulz',
// 		'Hummels',
// 		'Akanji',
// 		'Hakimi',
// 		'Weigl',
// 		'Witsel',
// 		'Hazard',
// 		'Brandt',
// 		'Sancho',
// 		'Gotze',
// 	  ],
// 	],
// 	score: '4:0',
// 	scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
// 	date: 'Nov 9th, 2037',
// 	odds: {
// 	  team1: 1.33,
// 	  x: 3.25,
// 	  team2: 6.5,
// 	},
//   };

//   const keys = Object.keys(game.scored)
//   console.log(keys)

//   const values = Object.values(game.scored)
//   console.log(values)

//   const entries = Object.entries(game.scored)
//   console.log(entries)

//   for (const [key, value] of game.scored.entries()){
// 	  console.log(`Goal ${key + 1}: ${value}`)
//   }

//   const odds = Object.values(game.odds) // array with odds values
//   console.log(odds)
//   let average = 0
//   for (const odd of odds){
// 	  average += odd
// 	}

// 	console.log(`Odds average: ${(average/odds.length).toFixed(2)}`)

// for(const [team, odd] of Object.entries(game.odds)){
// 	const teamStr = team === 'x' ? 'draw' : `Victory ${game[team]}`
// 	console.log(`Odd of ${teamStr} is ${odd}`)
// }

// const orderSet = new Set(['Pasta', 'Pizza', 'Pizza','Risotto', 'Pasta', 'Pizza'])

// console.log(orderSet)
// console.log(orderSet.size)
// console.log(orderSet.has('Pizza'))
// console.log(orderSet.has('Bread'))
// orderSet.add('Garlic Bread')
// orderSet.add('Garlic Bread')
// orderSet.delete('Garlic Bread')
// console.log(orderSet)

// console.log(new Set('Jonas'))

// example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']

// const nonDuplicateStaff = [...new Set(staff)]

// console.log(nonDuplicateStaff)
// console.log(nonDuplicateStaff)

// MAPS
// const rest = new Map()
// rest.set('name', 'Classico Italiano')
// rest.set(1, 'Firenze, Italy')
// rest.set(2, 'Lisbon, Portugal')
// console.log(rest)

// const question = new Map([
// 	['question', 'What is the best programming language in the world?'],
// 	[1, 'C#'],
// 	[2, 'Java'],
// 	[3, 'Javascript'],
// 	['correct', 3],
// 	[true, 'Correct'],
// 	[false, 'Try again']
// ])

// console.log(question)

// for(const [key, values] of question){
// 	console.log(key, values)
// }

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
	[17, "⚽️ GOAL"],
	[36, "🔁 Substitution"],
	[47, "⚽️ GOAL"],
	[61, "🔁 Substitution"],
	[64, "🔶 Yellow card"],
	[69, "🔴 Red card"],
	[70, "🔁 Substitution"],
	[72, "🔁 Substitution"],
	[76, "⚽️ GOAL"],
	[80, "⚽️ GOAL"],
	[92, "🔶 Yellow card"],
])

console.log(gameEvents)

//1.
const events = [...new Set(gameEvents.values())]
console.log(events)
//2.
gameEvents.delete(64)
//3.
const time = [...gameEvents.keys()].pop()
console.log(time)
console.log(`An event happened, on average, every ${time / gameEvents.size}`)
//4.
for(const [min, event] of gameEvents){
      const half = min <=45 ? "FIRST" : "SECOND"
      console.log(`[${half} HALF] ${min} : ${event}`)
}
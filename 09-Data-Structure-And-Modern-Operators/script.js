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

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri','sat','sun']

const openingHours = {
	[weekdays[3]]: {
		open: 12,
		close: 22
	},
	[weekdays[4]]: {
		open: 11,
		close: 23
	},
	sat: {
		open: 0,
		close: 24
	},
}

// OBJECT LITERAL
const restaurant = {
	name: "Classico Italiano",
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Foccacia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],mainMenu: ['Pizza', 'Pasta', 'Risotto'],

	// ES6 enhanced object literals
	openingHours,

	// no need for function declaration anymore with enhanced objects
	order(starterIndex, mainIndex){
		return [this.starterIndex[starterIndex], this.mainMenu[mainIndex]]
	},

	orderDelivery: function ({
			starterIndex = 1,
			mainIndex = 0,
			time = '20:00',
			address,
	}){
		console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
	},

	orderPasta: function(ing1, ing2, ing3){
		console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`)
	},

	orderPizza: function(mainIngredient, ...otherIngredients){
		console.log(mainIngredient)
		console.log(otherIngredients)
	}
}

console.log(restaurant)
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
for (const day of Object.keys(openingHours)){
	console.log(day)
}
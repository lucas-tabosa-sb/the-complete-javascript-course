// "use strict"

const restaurant = {
	name: "Classico Italiano",
	location: "Via Angelo Tavanti 23, Firenze, Italy",
	categories: ["Italian", "Pizzeria", "Vegetarian", "organic"],
	starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
	mainMenu: ["Pizza", "Pasta", "Risotto"],

	openingHours: {
		thu: {
			open: 12,
			close: 22,
		},
		fri: {
			open: 11,
			close: 23,
		},
		sat: {
			open: 0, //24h
			close: 24,
		},
	},

	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
	},
}

// // DESTRUCTURING OBJECTS

// // const { name, openingHours, categories } = restaurant
// // console.log(name)
// // console.log(openingHours)
// // console.log(categories)

// // const {
// // 	name: restaurantName,
// // 	openingHours: hours,
// // 	categories: tags,
// // } = restaurant
// // console.log(restaurantName)
// // console.log(hours)
// // console.log(tags)

// // MUTATING VARIABLES IN OBJECTS
// let a = 111
// let b = 999

// const obj = { a: 23, b: 7, c: 14 }

// let newObj = {...obj}
// newObj.a = a
// newObj.b = b
// console.log(newObj)

// // DESTRUCTURING ARRAYS
// // const arr = [2, 3, 4]
// // const a = arr[0]
// // const b = arr[1]
// // const c = arr[2]

// // const [x, y, z] = arr

// // console.log(x, y, z)
// // console.log(arr)

// // let [main, , secondary] = restaurant.categories
// // console.log(main, secondary)

// // let temp = main
// // main = secondary
// // secondary = temp
// // console.log(main, secondary)

// // [main, secondary] = [secondary, main]
// // console.log(main, secondary)

// // console.log(restaurant.order(2, 0))
// // const [starter, main] = restaurant.order(2, 0)
// // console.log(starter, main)

// // const nested = [2, 4, [5, 6]]
// // // const [i, , j] = nested
// // // console.log(i, j)
// // const [i, , [j, k]] = nested
// // console.log(i, j, k)
// // // default values
// // // pretend we don't know the array

// // const [p = 1, q = 1, r = 1] = [8, 9]
// // console.log(p, q, r)


// spread operator
// const arr = [7, 8, 9]
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
// console.log(badNewArr)

// const goodNewArr = [1, 2, ...arr]
// console.log(goodNewArr)

// const mainMenuCopy = [...restaurant.mainMenu]
// console.log(mainMenuCopy)

// // iterables: arrays, strings, maps, sets, NOT OBJECTS

// const str = 'Jonas'
// const letters = [...str, '', 's']
// console.log(letters)
//////////////////////////////////////////////////////////////////////////////
// REST OPERATOR


// SHORT CIRCUITING
console.log(3 || 'Lucas')
console.log('' || 'Lucas')
console.log(true || 0)
console.log(undefined || null)
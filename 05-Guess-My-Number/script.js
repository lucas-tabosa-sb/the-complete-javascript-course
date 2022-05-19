"use strict"

let statusMsg = document.querySelector(".message")
let randomNumberDisplay = document.querySelector(".number")
let inputGuess = document.querySelector(".guess")
let inputBtn = document.querySelector(".check")
let labelScore = document.querySelector(".score")
let body = document.querySelector("body")
let resetBtn = document.querySelector(".again")
let highScoreMsg = document.querySelector(".label-highscore")

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highScore = 0

inputBtn.addEventListener("click", function () {
	let guess = Number(inputGuess.value)

	// if input field is empty
	if (!inputGuess.value) {
		statusMsg.textContent = "⛔ Insert a Number"
		// if the guess is correct
	} else if (guess === secretNumber) {
		statusMsg.textContent = "Correct, you win!"
		body.style.backgroundColor = "#60b347"
		document.querySelector(".number").style.width = "30rem"
		randomNumberDisplay.textContent = secretNumber
		if (score > highScore) {
			highScoreMsg.textContent = `🥇 Highscore: ${score}`
		}
		// if the guess is incorrect
	} else if (guess !== secretNumber) {
		if (score > 1) {
			statusMsg.textContent = guess < secretNumber ? "too low!" : "too high!"
			score--
			labelScore.textContent = score
		} else {
			statusMsg.textContent = "You lost the Game 😭"
			labelScore.textContent = 0
			body.style.backgroundColor = "#e40505cc"
			randomNumberDisplay.textContent = secretNumber
		}
	} else {
		console.log("test")
	}
})

// resets the game, keeping the highscore
resetBtn.addEventListener("click", function () {
	score = 20
	secretNumber = Math.trunc(Math.random() * 20) + 1
	statusMsg.textContent = "Start Guessing..."
	inputGuess.value = ""
	labelScore.textContent = score
	randomNumberDisplay.textContent = "?"
	body.style.backgroundColor = "#222"
	document.querySelector(".number").style.width = "15rem"
	console.log(secretNumber)
})

//TODO
// refactor even more, using functions for repetitive code

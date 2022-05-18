"use strict"

let statusMsg = document.querySelector(".message")
let randomNumberDisplay = document.querySelector(".number")
let inputGuess = document.querySelector(".guess")
let inputBtn = document.querySelector(".check")
let labelScore = document.querySelector(".score")
let body = document.querySelector("body")

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20

inputBtn.addEventListener("click", function () {
	if (!inputGuess.value) {
		statusMsg.textContent = "⛔ Insert a Number"
	} else if (Number(inputGuess.value) === secretNumber) {
		statusMsg.textContent = "Correct, you win!"
		body.style.backgroundColor = "#60b347"
		document.querySelector(".number").style.width = "30rem"
		randomNumberDisplay.textContent = secretNumber
	} else if (Number(inputGuess.value) < secretNumber) {
		if (score > 1) {
			statusMsg.textContent = "too low!"
			score--
			labelScore.textContent = score
		} else {
			statusMsg.textContent = "You lost the Game 😭"
			labelScore.textContent = 0
			body.style.backgroundColor = "#e40505cc"
			randomNumberDisplay.textContent = secretNumber
		}
	} else if (Number(inputGuess.value) > secretNumber) {
		if (score > 1) {
			statusMsg.textContent = "too high!"
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

console.log(secretNumber)
console.log(typeof secretNumber)

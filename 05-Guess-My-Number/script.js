"use strict"

let statusMsg = document.querySelector(".message")
let $randomNumber = document.querySelector(".number").textContent
let $finalScore = document.querySelector(".score")
let $playerGuess = document.querySelector(".guess")
let $inputBtn = document.querySelector(".check")

let secretNumber = Math.trunc(Math.random() * 20) + 1
$randomNumber = secretNumber

$inputBtn.addEventListener("click", function () {
	if (!$playerGuess.value) {
		statusMsg.textContent = "⛔ Insert a Number"
	} else if (Number($playerGuess.value) === secretNumber) {
		statusMsg.textContent = "Correct, you win!"
	} else if (Number($playerGuess.value) < secretNumber) {
		statusMsg.textContent = "too low!"
	} else if (Number($playerGuess.value) > secretNumber) {
		statusMsg.textContent = "too low!"
	} else {
		console.log("test")
	}
})

console.log(secretNumber)
console.log(typeof secretNumber)

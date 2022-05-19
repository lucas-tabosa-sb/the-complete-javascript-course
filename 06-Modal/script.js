"use strict"

const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const closeModalBtn = document.querySelector(".close-modal")
const showModalBtn = document.querySelectorAll(".show-modal")

const hideModal = function () {
	modal.classList.add("hidden")
	overlay.classList.add("hidden")
}

const openModal = function () {
	modal.classList.remove("hidden")
	overlay.classList.remove("hidden")
}

for (let i = 0; i < showModalBtn.length; i++) {
	showModalBtn[i].addEventListener("click", openModal)
}

closeModalBtn.addEventListener("click", hideModal)
overlay.addEventListener("click", hideModal)
document.addEventListener("keydown", function (e) {
	// console.log(e)
	if (e.code === "Escape" && !modal.classList.contains("hidden")) {
		hideModal()
	}
})

//your JS code here. If required.
const modal= document.querySelector(".modal");
const openButton= document.querySelector("#openModal");
const closeButton= document.querySelector(".close-modal");
const modalContent= document.querySelector(".modal-content");

openButton.addEventListener("click", event => {
	modal.style.display= "block";
	setTimeout(() => {
		modalContent.classList.add("show");
	}, 10)
})

closeButton.addEventListener("click", event => {
	modal.style.display= "none";
	modalContent.classList.remove("show");
})

modal.addEventListener("click", event => {
	if(event.target === modal) {
		modal.style.display= "none";
		modalContent.classList.remove("show");
	}
})




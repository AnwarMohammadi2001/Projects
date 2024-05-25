const closeModalButton = document.getElementById("closeModalButton");
const modal = document.getElementById("modal");
const openModalButton = document.querySelectorAll(".openModalButton");

// Add an event listener to each button
openModalButton.forEach(function (button) {
  button.addEventListener("click", function () {
    modal.classList.remove("hidden");
  });
});

closeModalButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.classList.add("hidden");
  }
});

// const closeUserHoldr = document.getElementById("closeUserHolder");
// let user_holder = document.getElementById("user_holder");

// closeUserHoldr.addEventListener("click", () => {
 
// });

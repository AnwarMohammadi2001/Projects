// JavaScript to handle modal open and close
//const openModalButton = document.querySelectorAll(".openModalButton");
const closeModalButton = document.getElementById("closeModalButton");
const modal = document.getElementById("modal");
// jhgfdsafg
var openModalButton = document.querySelectorAll(".openModalButton");
// var closeModalButton = document.querySelectorAll(".closeModalButton");

// Add an event listener to each button
openModalButton.forEach(function (button) {
  button.addEventListener("click", function () {
    modal.classList.remove("hidden");
  });
});
// closeModalButton.forEach(function (button) {
//   button.addEventListener("click", function () {
//     modal.classList.remove("hidden");
//   });
// });
// modal.forEach(function (button) {
//   button.addEventListener("click", function (event) {
//     if (event.target == modal) {
//       modal.classList.add("hidden");
//     }
//   });
// });

// openModalButton.addEventListener("click", () => {
//   modal.classList.remove("hidden");
// });

closeModalButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    modal.classList.add("hidden");
  }
});

const openModalButton = document.querySelectorAll(".openModalButton");
const closeModalButton = document.getElementById("closeModalButton");
const modal = document.getElementById("modal");

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

// Buyer order Modal
const openBuyerDetialsModal = document.querySelectorAll(".open_order_details");
const closeBuerDetailsModal = document.getElementById("close-order-details");
const buyerModal = document.getElementById("modal_order");

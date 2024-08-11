const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".reviews-sortby-active");
  const dropdownMenu = document.querySelector(".delivery-dropdown");

  toggleButton.addEventListener("click", function (event) {
    event.preventDefault();
    dropdownMenu.classList.toggle("hidden");
  });
});

// ===============================
// MOBILE MENU
// ===============================

const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", function () {

    navbar.classList.toggle("active");

});
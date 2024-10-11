// Hamburger menu toggle
const hamMenu = document.querySelector(".hamburger");
const overlay = document.getElementById("overlay");
const offScreenMenu = document.querySelector(".off__screen__menu");
const navLink = document.querySelectorAll("#nav__link");
const hamburgerClose = document.querySelector("#hamburger-close");

hamMenu.addEventListener("click", () => {
  offScreenMenu.classList.toggle("active");
  overlay.classList.add("show-overlay");
});
hamburgerClose.addEventListener("click", () => {
  offScreenMenu.classList.remove("active");
  overlay.classList.remove("show-overlay");
});
overlay.addEventListener("click", () => {
  offScreenMenu.classList.remove("active");
  overlay.classList.remove("show-overlay");
});
navLink.forEach((link) => {
  link.addEventListener("click", () => {
    offScreenMenu.classList.remove("active");
    overlay.classList.remove("show-overlay");
  });
});

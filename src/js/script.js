const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("header-scrolled");
  } else if (window.scrollY <= 50) {
    header.classList.remove("header-scrolled");
    navMenu.classList.remove("active");
    menuButton.classList.remove("active");
  }
});

// Navigation
const menuButton = document.querySelector(".menu__button");
const navMenu = document.querySelector(".nav__menu");
const navLinks = document.querySelectorAll("nav__link");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navMenu.addEventListener("click", () => {
  menuButton.classList.remove("active");
  navMenu.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (!menuButton.contains(e.target) && !navMenu.contains(e.target)) {
    menuButton.classList.remove("active");
    navMenu.classList.remove("active");
  }
});
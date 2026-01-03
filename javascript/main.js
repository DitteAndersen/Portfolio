console.log(" JS loaded");

// burgermenu
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");

burger.addEventListener("click", () => {
  nav.classList.toggle("open");
});

const links = document.querySelectorAll(".nav ul a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

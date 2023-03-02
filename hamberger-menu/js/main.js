const menuBar = document.getElementById("menu-bar");
const nav = document.getElementById("nav");
const menuBg = document.getElementById("menu-bg");

function toggleMenu() {
  menuBar.classList.toggle("change");
  menuBg.classList.toggle("change-bg");
  nav.classList.toggle("change");
}

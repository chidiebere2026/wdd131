// Dynamic Copyright Year
const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

// Last Modified Date
document.getElementById("lastModified").textContent =
  "Last Modified: " + document.lastModified;


// Toggle mobile nav
const menuButton = document.querySelector("#menuButton");
const nav = document.querySelector("#mainNav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("show");
});
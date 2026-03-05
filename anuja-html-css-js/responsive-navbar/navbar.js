const navbar = document.querySelector(".navbar");
const toggleBtn = document.getElementById("toggle");
const menu = document.getElementById("menu");

toggleBtn.onclick = () => {
  navbar.classList.toggle("active");
};

// Clicking the menu iteself can close it to bring back the hamburger
menu.onclick = () => {
  navbar.classList.remove("active");
};
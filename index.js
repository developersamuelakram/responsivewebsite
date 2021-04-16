const menuButton = document.getElementById("menuElement");
const mainMenu = document.querySelector(".mainMenu");
const openMenu = document.querySelector(".openMenu");

menuButton.addEventListener("click", show);

function show() {
  if (!menuButton.classList.contains("is-active")) {
    menuButton.classList.add("is-active");
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
  } else {
    menuButton.classList.remove("is-active");
    mainMenu.style.top = "-100%";
  }
}

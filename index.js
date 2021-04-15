const getShit = document.getElementById("menuElement");
const mainMenu = document.querySelector(".mainMenu");
const openMenu = document.querySelector(".openMenu");

getShit.addEventListener("click", show);

function show() {
  if (!getShit.classList.contains("is-active")) {
    getShit.classList.add("is-active");
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
  } else {
    getShit.classList.remove("is-active");
    mainMenu.style.top = "-100%";
  }
}

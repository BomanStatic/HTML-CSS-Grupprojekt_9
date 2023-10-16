const toggleMenuButton = document.querySelector(".toggle-menu-button");
const navLinks = document.querySelector(".nav-links");
function onToggleMenu() {
    toggleMenuButton.name = toggleMenuButton.name === "menu" ? "close" : "menu";
    navLinks.classList.toggle("hidden");
}

toggleMenuButton.addEventListener("click", onToggleMenu);

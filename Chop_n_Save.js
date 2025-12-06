const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu-list");
const dropdown = document.querySelector(".dropdown");

// Click to toggle
btn.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent closing immediately
    menu.classList.toggle("show");
});

// Close when clicking outside
document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
        menu.classList.remove("show");
    }
});

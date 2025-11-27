const links = document.querySelectorAll("[data-modal]");
    const modals = document.querySelectorAll(".modal");
    const closes = document.querySelectorAll(".close");

    // Open modal
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const modalId = link.getAttribute("data-modal");
            document.getElementById(modalId).style.display = "block";
        });
    });

    // Close modal when X is clicked
    closes.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.parentElement.parentElement.style.display = "none";
        });
    });

    // Close modal when clicking outside content
    window.addEventListener("click", (e) => {
        modals.forEach(modal => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    });

    // Set timestamp when the form loads
window.addEventListener("DOMContentLoaded", () => {
    const timestampField = document.getElementById("timestamp");

    // Generate current date & time (ISO or readable format)
    const now = new Date();

    // Option 1: Human-readable format
    const formatted = now.toLocaleString(); 

    // Option 2: ISO format (YYYY-MM-DDTHH:MM:SS)
    // const formatted = now.toISOString();

    timestampField.value = formatted;
});

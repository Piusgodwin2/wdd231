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
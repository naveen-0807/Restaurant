  // Get button and collapse element
    const toggler = document.getElementById("navbarToggler");
    const collapse = document.getElementById("navbarCollapse");

    // Toggle show/hide on click
    toggler.addEventListener("click", () => {
        collapse.classList.toggle("show");
    });
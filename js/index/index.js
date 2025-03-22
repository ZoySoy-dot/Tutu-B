const scrollBtn = document.getElementById("header-navigation-button");
let goingDown = true; // direction toggle

scrollBtn.addEventListener("click", function () {
    const sections = Array.from(document.querySelectorAll(".section"));
    const currentScroll = window.scrollY + 1;

    if (goingDown) {
        const nextSection = sections.find(section => section.offsetTop > currentScroll);
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
            if (nextSection.id === "contact") {
                goingDown = false;
                scrollBtn.style.transform = "rotate(180deg)";
            }
        }
    } else {
        // Scroll back to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
        goingDown = true;
        scrollBtn.style.transform = "rotate(0deg)";
    }
});

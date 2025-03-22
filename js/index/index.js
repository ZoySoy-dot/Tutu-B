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

const informationButton = document.querySelectorAll(".Information_Picker_Button");

informationButton.forEach(element => {
    element.addEventListener("click", function () {
        document.querySelector(".Information_Picker_Button_Active").classList.remove("Information_Picker_Button_Active");
        document.querySelector(".Article_Section_Active").classList.remove("Article_Section_Active");
        if(element.id === "us"){
            document.querySelector(".Article_Section.About-us").classList.add("Article_Section_Active");
        }else if(element.id === "mission"){
            document.querySelector(".Article_Section.Mission").classList.add("Article_Section_Active");
        }
        else if(element.id === "vision"){
            document.querySelector(".Article_Section.Vision").classList.add("Article_Section_Active");
        }
        else{
            console.log("Error: No such element");
        }
        element.classList.add("Information_Picker_Button_Active");
    });
});
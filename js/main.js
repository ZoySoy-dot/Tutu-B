const hamburger = document.getElementsByClassName("Hamburger-Menu-Button")[0];

hamburger.addEventListener("click", function () {
  const navigation = document.getElementsByClassName("Hamburger-Menu")[0];

  navigation.style.display = "flex";
  document.querySelector("html").style.overflow = "hidden";
});

const hamburgerClose = document.getElementsByClassName("Hamburger-Menu_Button-Close")[0];

hamburgerClose.addEventListener("click", function () {
    const navigation = document.getElementsByClassName("Hamburger-Menu")[0];
    
    navigation.style.display = "none";
    document.querySelector("html").style.overflow = "auto";
});

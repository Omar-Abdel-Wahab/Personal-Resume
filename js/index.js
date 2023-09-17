const collapseButton = document.querySelector("button.navbar-toggler");
const navbarContent = document.getElementById("navbarSupportedContent");

const navbarItems = document.querySelectorAll("ul.navbar-nav > li");

navbarItems.forEach((item) => {
    item.addEventListener("click", function(){
        navbarContent.classList.remove("show");
        collapseButton.classList.add("collapsed");
    })
});
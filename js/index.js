const collapseButton = document.querySelector("button.navbar-toggler");
const navbarContent = document.getElementById("navbarSupportedContent");

const navbarItems = document.querySelectorAll("ul.navbar-nav > li");

navbarItems.forEach((item) => {
    item.addEventListener("click", hideMenu);
});

document.addEventListener("click", function(event){
    const clickedElement = event.target;
    if(clickedOutside(clickedElement)){
        hideMenu();
    }
});

function hideMenu(){
    navbarContent.classList.remove("show");
    collapseButton.classList.add("collapsed");
}

function clickedOutside(clickedElement){
    const navbarToggler = clickedElement.classList.contains("navbar-toggler");
    const customToggler = clickedElement.classList.contains("custom-toggler");
    if(navbarToggler || customToggler){
        return false;
    }
    return true;
}
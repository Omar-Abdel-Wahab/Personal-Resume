const navbarToggler = document.getElementsByClassName("navbar-toggler")[0];
const navbarContent = document.getElementById("navbar-content");

const navbarContentItems = Array.from(navbarContent.getElementsByClassName("nav-item"));

navbarContentItems.forEach((item) => {
    item.addEventListener("click", hideMenu);
});

document.addEventListener("click", function(event){
    const clickedElement = event.target;
    
    if(isOutsideMenu(clickedElement)){
        hideMenu();
    }
});

function hideMenu(){
    navbarContent.classList.remove("show");
    navbarToggler.classList.add("collapsed");
}

function isOutsideMenu(clickedElement){
    const isNavbarToggler = clickedElement.classList.contains("navbar-toggler");
    const isCustomToggler = clickedElement.classList.contains("custom-toggler");
    if(isNavbarToggler || isCustomToggler){
        return false;
    }
    return true;
}
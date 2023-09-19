function main(){
    addHideMenu();
}

function addHideMenu(){
    addHideMenuToDocument();
    addHideMenuToNavItems();
}

function addHideMenuToDocument(){
    document.addEventListener("click", hideMenu);    
}

function hideMenu(){
    const navbarToggler = getNavbarToggler();
    const navbarContent = getNavbarContent();

    navbarContent.classList.remove("show");
    navbarToggler.classList.add("collapsed");    
}

function getNavbarToggler(){
    const navbarToggler = document.getElementsByClassName("navbar-toggler")[0];
    return navbarToggler;
}

function getNavbarContent(){
    const navbarContent = document.getElementById("navbar-content");
    return navbarContent;
}

function addHideMenuToNavItems(){
    const navbarItems = getNavbarItems();
    
    navbarItems.forEach((item) => {
        item.addEventListener("click", hideMenu);
    });    
}

function getNavbarItems(){
    const navbarContent = getNavbarContent();
    const navbarItems = Array.from(navbarContent.getElementsByClassName("nav-item"));
    return navbarItems;
}

main();
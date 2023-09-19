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
    hideNavbarContent();
    hideNavbarToggler();
}

function hideNavbarContent(){
    const navbarContent = getNavbarContent();
    navbarContent.classList.remove("show");
}

function getNavbarContent(){
    const navbarContent = document.getElementById("navbar-content");
    return navbarContent;
}

function hideNavbarToggler(){
    const navbarToggler = getNavbarToggler();
    navbarToggler.classList.add("collapsed");    
}

function getNavbarToggler(){
    const navbarToggler = document.getElementsByClassName("navbar-toggler")[0];
    return navbarToggler;
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
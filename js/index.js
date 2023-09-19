function main(){
    addHideMenu();
}

function addHideMenu(){
    addHideMenuToDocument();
    addHideMenuToNavbarItems();
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

function addHideMenuToNavbarItems(){
    const navItems = getNavItems();
    
    navItems.forEach((item) => {
        item.addEventListener("click", hideMenu);
    });    
}

function getNavItems(){
    const navItemsCollection = getNavItemsCollection();
    const navItems = getNavItemsAsArray(navItemsCollection);
    return navItems;
}

function getNavItemsCollection(){
    const navbarContent = getNavbarContent();
    const navItemsCollection = navbarContent.getElementsByClassName("nav-item");
    return navItemsCollection;
}

function getNavItemsAsArray(navItemsCollection){
    const navItems = Array.from(navItemsCollection);
    return navItems;
}

main();
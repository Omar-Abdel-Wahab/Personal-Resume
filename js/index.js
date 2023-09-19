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
    const navbarItems = getNavbarItems();
    
    navbarItems.forEach((item) => {
        item.addEventListener("click", hideMenu);
    });    
}

function getNavbarItems(){
    const items = getItemsFromContent();
    const navbarItems = getItemsAsArray(items);
    return navbarItems;
}

function getItemsFromContent(){
    const navbarContent = getNavbarContent();
    const items = navbarContent.getElementsByClassName("nav-item");
    return items;
}

function getItemsAsArray(items){
    const navbarItems = Array.from(items);
    return navbarItems;
}

main();
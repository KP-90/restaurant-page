function tabs() {
    const tabDiv = document.createElement("div");
    const mainTab = document.createElement("div");
    const contactTab = document.createElement("div");
    const menuTab = document.createElement("div");
    tabDiv.className = "tabDiv";
    mainTab.className = "tab";
    mainTab.classList.add("active");
    mainTab.id = "mainTab";
    contactTab.className = "tab";
    contactTab.id = "contact";
    menuTab.className = "tab";
    menuTab.id = "menu"

    mainTab.innerText = "Home";
    contactTab.innerText = "Contact";
    menuTab.innerText = "Menu";


    tabDiv.append(mainTab, menuTab, contactTab);

    return tabDiv;
}

export default tabs;
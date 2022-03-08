import Page_load from './page-load.js';
import tabs from './tabs.js';


import './style.css'

const body = document.querySelector("#mainContent");
body.appendChild(tabs());

const content = document.createElement("div");
content.id = "content";
body.appendChild(content);
content.appendChild(Page_load.page())
const main = document.querySelector("#mainTab");
const menu = document.querySelector("#menu")
const contact = document.querySelector("#contact")
let allTabs = document.querySelectorAll(".tab")


allTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        while (content.firstChild) {
            content.removeChild(content.firstChild)
        }
        switch(tab.id) {
            case "mainTab":
                content.appendChild(Page_load.page());
                break;
            case "menu":
                content.appendChild(Page_load.menuLoad());
                break;
            case "contact":
                content.appendChild(Page_load.contacts());
                break;
        }
        allTabs.forEach(t => {
            t.classList.remove("active");
        })
        tab.classList.add("active");
    })
})
import Page_load from './page-load.js';
import tabs from './tabs.js';


import './style.css'

const body = document.querySelector("#mainContent");
body.appendChild(tabs());

const content = document.createElement("div");
content.id = "content";
body.appendChild(content);

const main = document.querySelector("#mainTab");
const menu = document.querySelector("#menu")
const contact = document.querySelector("#contact")
//let p = new Page_load;
let allTabs = document.querySelectorAll(".tab")

allTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        while (content.firstChild) {
            content.removeChild(content.firstChild)
        }
        console.log(tab.innerHTML)
        switch(tab.innerHTML) {
            case "Home":
                content.appendChild(Page_load.page());
            case "Menu":
                content.appendChild(Page_load.menuLoad());
                break;
            case "Contact":
                content.appendChild(Page_load.contacts());
        }
        allTabs.forEach(t => {
            t.classList.remove("active");
        })
        tab.classList.add("active");
    })
})
class Page_load {
    static page() {
        let contain = document.createElement("div");
        contain.className = "pageContainer";
        let title = document.createElement("h1");
        let image = document.createElement("img");
        let headline = document.createElement("p");

        title.innerText = "Restaurant";
        image.src = "#";
        headline.innerText = "Best place to eat."
        contain.appendChild(title);
        contain.appendChild(image);
        contain.appendChild(headline);
        return contain;
    }

    static menuLoad() {
        let container = document.createElement("div"); 
        container.innerText = "Menu stuff";
    
        return container;
    }

    static contacts() {
        let contain = document.createElement("div");
        contain.innerText = "contact stuff";
    
        return contain;
    }
}



export default Page_load;


// Data
const temples = [
    {
        name: "Salt Lake Temple",
        location: "Salt Lake City, Utah, USA",
        dedicated: "1893-04-06",
        area: 253015,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-lds-942768-wallpaper.jpg"
    },
    {
        name: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019-03-10",
        area: 41010,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-lds-247970-wallpaper.jpg"
    },
    {
        name: "Tokyo Japan Temple",
        location: "Tokyo, Japan",
        dedicated: "1980-10-27",
        area: 52790,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-lds-1198953-wallpaper.jpg"
    },
    
    {
        name: "Abuja Nigeria Temple",
        location: "Abuja, Nigeria",
        dedicated: "2023-11-01",
        area: 32000,
        imageUrl: "https://example.com/abuja-temple.jpg"
    },
    {
        name: "Paris France Temple",
        location: "Paris, France",
        dedicated: "2017-05-21",
        area: 44000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-lds-1126439-wallpaper.jpg"
    },
    {
        name: "Laie Hawaii Temple",
        location: "Laie, Hawaii, USA",
        dedicated: "1919-11-27",
        area: 42000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-lds-739860-wallpaper.jpg"
    }
];

// DOM elements
const gallery = document.getElementById("temple-gallery");
const title = document.getElementById("page-title");
const navLinks = document.querySelectorAll("nav a");

// Footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Menu Button Toggle
document.getElementById("menu-button").addEventListener("click", () => {
    document.getElementById("nav-menu").classList.toggle("open");
});

// Function to build cards
function createTempleCard(temple) {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.name;
    img.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.innerHTML = `<strong>${temple.name}</strong><br>
        ${temple.location}<br>
        Dedicated: ${temple.dedicated}<br>
        Area: ${temple.area.toLocaleString()} sq ft`;

    figure.appendChild(img);
    figure.appendChild(caption);
    gallery.appendChild(figure);
}

// Filter and display
function displayTemples(filteredTemples) {
    gallery.innerHTML = "";
    filteredTemples.forEach(createTempleCard);
}

function filterTemples(filter) {
    let filtered = temples;
    switch (filter) {
        case "old":
            filtered = temples.filter(t => new Date(t.dedicated) < new Date("1900-01-01"));
            title.textContent = "Old Temples";
            break;
        case "new":
            filtered = temples.filter(t => new Date(t.dedicated) > new Date("2000-01-01"));
            title.textContent = "New Temples";
            break;
        case "large":
            filtered = temples.filter(t => t.area > 90000);
            title.textContent = "Large Temples";
            break;
        case "small":
            filtered = temples.filter(t => t.area < 10000);
            title.textContent = "Small Temples";
            break;
        default:
            title.textContent = "Home";
            break;
    }
    displayTemples(filtered);
}

// Event listeners for nav links
navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const filter = link.getAttribute("data-filter");
        filterTemples(filter);
    });
});

// Default display
displayTemples(temples);

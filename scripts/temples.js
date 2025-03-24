
document.getElementById("year").textContent = new Date().getFullYear();


document.getElementById("lastModified").textContent = document.lastModified;


const menuButton = document.querySelector(".menu-button"); 
const navMenu = document.querySelector("nav"); 

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open"); 
    menuButton.classList.toggle("open"); 
});

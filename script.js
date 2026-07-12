// ================================
// Dark Mode
// ================================

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const icon = darkModeBtn.querySelector("i");

    if (document.body.classList.contains("dark")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});

// ================================
// Scroll Animation
// ================================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "all 0.6s ease";

    observer.observe(card);
});

// ================================
// Product Button
// ================================

const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const productName =
            button.parentElement.querySelector("h3").innerText;

        alert("You selected: " + productName);

    });

});

// ================================
// Navbar Shadow
// ================================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.15)";
    } else {
        header.style.boxShadow = "0 2px 15px rgba(0,0,0,.08)";
    }

});

// =======================
// IMAGE LIGHTBOX
// =======================

const images = document.querySelectorAll(".zoom-image");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

const closeBtn = document.getElementById("close");

images.forEach(image=>{

    image.addEventListener("click",()=>{

        lightbox.style.display="flex";

        lightboxImg.src=image.src;

    });

});

closeBtn.onclick=()=>{

    lightbox.style.display="none";

}

lightbox.onclick=(e)=>{

    if(e.target===lightbox){

        lightbox.style.display="none";

    }

}

const menu = document.getElementById("galleryMenu");
const dropdown = document.getElementById("galleryDropdown");

menu.addEventListener("click", function(e) {
    e.preventDefault();
    dropdown.style.display =
        dropdown.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", function(e) {
    if (!menu.parentElement.contains(e.target)) {
        dropdown.style.display = "none";
    }
});


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
// ================================
// Mobile Menu
// ================================

// ================================
// Gallery Dropdown
// ================================

const galleryBtn = document.getElementById("galleryBtn");
const galleryMenu = document.getElementById("galleryMenu");
const cottonBtn = document.getElementById("cottonBtn");
const cottonMenu = document.getElementById("cottonMenu");

if (galleryBtn && galleryMenu) {
    galleryBtn.addEventListener("click", function(e) {
        e.preventDefault();
        galleryMenu.classList.toggle("show");
        if (!galleryMenu.classList.contains("show") && cottonMenu) {
            cottonMenu.classList.remove("show");
        }
    });
}

if (cottonBtn && cottonMenu) {
    cottonBtn.addEventListener("click", function(e) {
        e.preventDefault();
        e.stopPropagation();
        cottonMenu.classList.toggle("show");
    });
}

document.addEventListener("click", function(e){

    if(galleryBtn && galleryMenu && !galleryBtn.contains(e.target) && !galleryMenu.contains(e.target)){
        galleryMenu.classList.remove("show");
        if (cottonMenu) cottonMenu.classList.remove("show");
    }

});

const popup=document.getElementById("productPopup");

const popupImage=document.getElementById("popupImage");

const popupTitle=document.getElementById("popupTitle");

const popupPrice=document.getElementById("popupPrice");

const popupDetail=document.getElementById("popupDetail");

const popupOrder=document.getElementById("popupOrder");

document.querySelectorAll(".viewBtn").forEach(button=>{

button.onclick=function(){

popup.style.display="flex";

popupImage.src=this.dataset.image;

popupTitle.innerHTML=this.dataset.name;

popupPrice.innerHTML=this.dataset.price;

popupDetail.innerHTML=this.dataset.detail;

const message=`Hello Khayr Calligraphy,

I would like to order:

Product : ${this.dataset.name}

Price : ${this.dataset.price}

Thank you.`;

popupOrder.href="https://wa.me/601125764580?text="+encodeURIComponent(message);

}

});

document.querySelector(".close-popup").onclick=function(){

popup.style.display="none";

}

window.onclick=function(e){

if(e.target==popup){

popup.style.display="none";

}

}

// ================================
// Mobile Menu
// ================================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {

    // Buka / Tutup menu
    menuToggle.addEventListener("click", function(e){
        e.stopPropagation();
        navMenu.classList.toggle("active");
    });

    // Tutup menu bila tekan luar
    document.addEventListener("click", function(e){

        if(
            !navMenu.contains(e.target) &&
            !menuToggle.contains(e.target)
        ){
            navMenu.classList.remove("active");

            // Tutup dropdown Gallery
            if(galleryMenu) galleryMenu.classList.remove("show");

            // Tutup submenu Cotton
            if(cottonMenu) cottonMenu.classList.remove("show");
        }

    });

}



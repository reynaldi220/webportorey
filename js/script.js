/* ==========================
   CONTACT FORM
========================== */

document.querySelector(".contact-form")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Pesan berhasil dikirim!");

    this.reset();

});


/* ==========================
   NAVBAR SHADOW ON SCROLL
========================== */

window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }

});


/* ==========================
   ACTIVE NAVIGATION
========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});


/* ==========================
   TYPING EFFECT
========================== */

const textArray = [
    "Mahasiswa Sistem Informasi",
    "Web Developer",
    "UI/UX Enthusiast",
    "Technology Learner"
];

let textIndex = 0;
let charIndex = 0;

const typingElement = document.querySelector("#typing");

function typeEffect(){

    if(!typingElement) return;

    if(charIndex < textArray[textIndex].length){

        typingElement.textContent +=
        textArray[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(eraseEffect, 1500);

    }

}

function eraseEffect(){

    if(charIndex > 0){

        typingElement.textContent =
        textArray[textIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseEffect, 50);

    } else {

        textIndex++;

        if(textIndex >= textArray.length){
            textIndex = 0;
        }

        setTimeout(typeEffect, 300);

    }

}

document.addEventListener("DOMContentLoaded", () => {

    if(typingElement){
        typeEffect();
    }

});


/* ==========================
   FADE IN ON LOAD
========================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});

// DARK MODE

const darkModeToggle =
    document.getElementById("darkModeToggle");

if (localStorage.getItem("theme") === "dark") {

    document.body.classList.add("dark-mode");

    darkModeToggle.innerHTML =
        '<i class="fa-solid fa-sun"></i>';
}

darkModeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (
        document.body.classList.contains("dark-mode")
    ) {

        localStorage.setItem("theme", "dark");

        darkModeToggle.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem("theme", "light");

        darkModeToggle.innerHTML =
            '<i class="fa-solid fa-moon"></i>';
    }
});
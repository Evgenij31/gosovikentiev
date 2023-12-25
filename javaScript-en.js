//mobile-nav-bar
function OpenMobileNav(){
    document.getElementById("mobile-nav").style.visibility="visible";
    document.getElementById("mobile-nav").style.position="relative";
    document.getElementById("mobile-nav").style.animation="slide-right 0.4s";
    document.getElementById("open-Mnav").style.visibility="hidden";
    document.getElementById("open-Mnav").style.position="absolute";
}
function CloseMobileNav(){
    document.getElementById("mobile-nav").style.animation="slide-left 0.4s";
    setTimeout(() => {
        document.getElementById("mobile-nav").style.visibility="hidden";
        document.getElementById("mobile-nav").style.position="absolute";
        document.getElementById("open-Mnav").style.visibility="visible";
        document.getElementById("open-Mnav").style.position="relative";
    }, 400)
}
//navigation buttons
function HomeP(){
    document.location="index-en.html";
}
function About(){
    document.location="about-en.html";
}
function Struki(){
    document.location="struki-en.html";
}
function Act(){
    document.location="activities-en.html";
}
function Contact(){
    document.location="contact-en.html";
}
function OTabla(){
    document.location="oTabla-en.html";
}
function UKadar(){
    document.location="Kadar-en.html";
}
function Dualni(){
    document.location="dualniparalelki-en.html";
}
function InfoZ(){
    document.location="info-zapisuvanje-en.html";
}
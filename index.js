//nav
function OpenMobileNav() {
    document.getElementById("nav-ul").style.display = "block";
    document.getElementById("closeNav").style.display = "block";
    document.getElementById("nav-ul").style.animation = "slide-right 0.4s";
    document.getElementById("openNav").style.display = "none";
}
function CloseMobileNav() {
    document.getElementById("nav-ul").style.animation = "slide-left 0.4s";
    setTimeout(() => {
        document.getElementById("nav-ul").style.display = "none";
        document.getElementById("closeNav").style.display = "none";
        document.getElementById("openNav").style.display = "block";
    }, 400)
}

//footer year
let yrFooter = document.getElementById("year");
let year = new Date();
yrFooter.innerHTML = year.getFullYear();
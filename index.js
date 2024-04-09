//nav
function OpenMobileNav(){
    document.getElementById("nav-ul").style.display="block";
    document.getElementById("closeNav").style.display="block";
    document.getElementById("nav-ul").style.animation="slide-right 0.4s";
    document.getElementById("openNav").style.display="none";
}
function CloseMobileNav(){
    document.getElementById("nav-ul").style.animation="slide-left 0.4s";
    setTimeout(() => {
        document.getElementById("nav-ul").style.display="none";
        document.getElementById("closeNav").style.display="none";
        document.getElementById("openNav").style.display="block";
    }, 400)
}

let dImages = document.getElementsByClassName("image");
dImages[0].style.display = "block";
let dImages_length = dImages.length;
let currentIndex = 0;

function displayImg(x) {

    currentIndex += x;

    if (currentIndex < 0) {
        currentIndex = dImages_length - 1;
    }

    if (currentIndex > dImages_length - 1) {
        currentIndex = 0;
    }

    for (let j = 0; j < dImages_length; j++) {
        if (currentIndex == j) {
            dImages[currentIndex].style.animation = "fade .5s"
            dImages[currentIndex].style.display = "block";
        }

        else {
            dImages[j].style.display = "none";
        }
    }

}

//touch
let area = document.getElementById("touch");

area.addEventListener('touchstart', handleTouchStart, false);
area.addEventListener('touchmove', handleTouchMove, false);

let xDown = null;
let yDown = null;

function getTouches(evt) {
    return evt.touches || // browser API
        evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            //console.log("right swipe");
            displayImg(1);
        } else {
            //console.log("left swipe");
            displayImg(-1);
        }
    } else {
        if (yDiff > 0) {
            /* down swipe */
        } else {
            /* up swipe */
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};
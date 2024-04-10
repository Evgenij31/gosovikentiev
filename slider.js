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
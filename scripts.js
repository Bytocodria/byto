
let slideIndex = 0;


function controller(x) {

    slideIndex = slideIndex + x;
    slideshow(slideIndex);
}


// Function to change slides automatically
function autoChangeSlides() {
    slideIndex++;
    slideshow(slideIndex);
}

// Set the auto-slideshow to change slides every 3 seconds (3000ms)
setInterval(autoChangeSlides, 3000);


slideshow(slideIndex);



function slideshow(num) {
    let slides = document.getElementsByClassName("slide");


    if (num == slides.length) {
        slideIndex = 0;
        num = 0; 
    }

    if (num < 0) {
        slideIndex = slides.length -1;
        num = slides.length-1; 
    }


    for (y of slides) {

        y.style.display = "none";
    }

    slides[num].style.display="block";

}
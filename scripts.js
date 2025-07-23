
let slideIndex = 0;
let slideInterval;

function controller(x) {

    slideIndex += x;
    slideshow(slideIndex);
}




// Set the auto-slideshow to change slides every 3 seconds (3000ms)
//setInterval(autoChangeSlides, 3000);


//slideshow(slideIndex);



function slideshow(num) {
    let slides = document.getElementsByClassName("slide");


    // if (num == slides.length) {
    //  slideIndex = 0;
    // num = 0; 
    //}
    if (num >= slides.length) {
        slideIndex = 0;
        num = 0;
    }

    if (num < 0) {
        slideIndex = slides.length - 1;
        num = slideIndex;
    }


    for (let y of slides) {

        y.style.display = "none";
    }

    slides[num].style.display = "block";

}

// Function to change slides automatically
function autoChangeSlides() {
    slideIndex++;
    slideshow(slideIndex);
}

function startSlideShow() {
    slideInterval = setInterval(autoChangeSlides, 3000);
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

slideshow(slideIndex);
startSlideShow();
// Pause on hover for the main slideshow
const slideshowContainer = document.querySelector('.slider-container1');
slideshowContainer.addEventListener('mouseover', stopSlideShow);
slideshowContainer.addEventListener('mouseout', startSlideShow);

// Pause on touch for mobile users
slideshowContainer.addEventListener('touchstart', stopSlideShow);
slideshowContainer.addEventListener('touchend', startSlideShow);


const scrollTrack = document.getElementById('scroll-track');
const scrollContainer = document.getElementById('scroll-container');

const clone = scrollTrack.cloneNode(true);
while (clone.children.length > 0) {
    scrollTrack.appendChild(clone.children[0]);
}

let isPaused = false;
scrollContainer.addEventListener('mouseenter', () => {
    isPaused = true;
});
scrollContainer.addEventListener('mouseleave', () => {
    isPaused = false;
  });

function autoScroll() {
    if (!isPaused) {
        scrollContainer.scrollLeft += 1;

        // If we reach the end, reset to start
        if (scrollContainer.scrollLeft >= scrollTrack.scrollWidth / 2) {
            scrollContainer.scrollLeft = 0;
        }
    }
    requestAnimationFrame(autoScroll);
}
autoScroll();
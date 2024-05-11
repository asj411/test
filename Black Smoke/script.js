var slideIndex = 0;
var slides;
var slideTimeout;

document.addEventListener("DOMContentLoaded", function() {
    slides = document.getElementsByClassName("mySlides");
    showSlides();
});

function showSlides() {
    var i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}
    slides[slideIndex - 1].style.display = "block";
    slideTimeout = setTimeout(showSlides, 5000); 
}

function plusSlides(n) {
    clearTimeout(slideTimeout);
    showSlides();
    if (n == -1) {
        slideIndex -= 2; 
    }
}
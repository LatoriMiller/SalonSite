var slideIndex = 0;
showSlides();
// showSlides function will access the mySlides and dot elements from the home page's DOM and use a loop to change the display property to none every 5 seconds. SlideIndex is then incremented. 
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    
    // for loop moves through slides  
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    // slide index increments and will restart once reaching the end of slides
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    //calls the showSlides and increments the functions by 5 secs
    setTimeout(showSlides, 5000); 
}
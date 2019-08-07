// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= 30) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

/* Image Slider */
var slideIndex = 0;
showSlides(0);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
  var i;
  var slides1 = document.getElementsByClassName("mySlides1");
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";  
  }
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";  
  }
  slideIndex++;

  if (slideIndex > slides1.length && slideIndex > slides2.length) {slideIndex = 1}   
  

  for (i = 0; i < slides2.length; i++) {
    //dots[i].className = dots[i].className.replace(" active", "");
      slides1[slideIndex-1].style.display = "block";    
      //dots[slideIndex-1].className += " active";
     if(slideIndex >= 3){
      var currentPosition = slideIndex % 2;
      if(currentPosition == 0){currentPosition = 2};
      slides1[slideIndex-1].style.display = "block";
      slides2[currentPosition - 1].style.display = "block";
    } else{
      console.log("Slide index is: " + slideIndex);
      slides1[slideIndex-1].style.display = "block";  
      slides2[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " active";
    }
  }
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
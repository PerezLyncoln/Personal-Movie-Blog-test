let slideIndex = 1;
window.onload = function() {
  showSlides(slideIndex);
};

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Ensure slideIndex is in bounds
  if (n > slides.length) {
    slideIndex = 1; // Loop back to the first slide
  }
  if (n < 1) {
    slideIndex = slides.length; // Loop back to the last slide
  }

  // Hide all slides initially
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and set the corresponding dot as active
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

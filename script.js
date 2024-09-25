let currentSlide = 0;
const totalSlides = document.querySelectorAll(".slide").length;

function moveSlide(TimeInterval) {
  const slideshow = document.getElementById("slideshow");
  currentSlide = (currentSlide + TimeInterval + totalSlides) % totalSlides;
  slideshow.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(() => {
  moveSlide(1);
}, 3000); // 3000ms = 3 seconds

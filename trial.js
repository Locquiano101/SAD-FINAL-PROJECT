document.querySelectorAll(".sticky-nav a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetID = this.getAttribute("href");
    const targetSection = document.querySelector(targetID);
    const targetPosition = targetSection.offsetTop;

    slowScrollTo(targetPosition, 500); // 2000ms = 2 seconds
  });
});

function slowScrollTo(targetPosition, duration) {
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);

    window.scrollTo(0, run);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}
let currentSlide = 0;
const totalSlides = document.querySelectorAll(".slide").length;

function moveSlide(TimeInterval) {
  const slideshow = document.getElementById("slideshow"); // ID of the container with slides
  currentSlide = (currentSlide + TimeInterval + totalSlides) % totalSlides;
  slideshow.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto slide every 3 seconds
setInterval(() => {
  moveSlide(1);
}, 3000); // 3000ms = 3 seconds

// ACTIVE LINK IN NAVIGATION

const links = document.querySelectorAll(".nav-link");

// Add click event listener to each link
links.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove 'active' class from all links
    links.forEach((link) => link.classList.remove("active"));

    // Add 'active' class to the clicked link
    this.classList.add("active");
  });
});

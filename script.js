const track = document.getElementById("sliderTrack");
const slides = document.querySelectorAll(".slide");

let index = 0;
const total = slides.length;

function updateSlider() {
  track.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % total;
  updateSlider();
}

function prevSlide() {
  index = (index - 1 + total) % total;
  updateSlider();
}

/* autoplay */
setInterval(() => {
  nextSlide();
}, 4000);

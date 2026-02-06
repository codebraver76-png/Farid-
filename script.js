const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let index = 0;

// Show slide
function showSlide(i) {
  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  slides[i].classList.add("active");
  dots[i].classList.add("active");
}

// Next
function nextSlide() {
  index++;
  if (index >= slides.length) index = 0;
  showSlide(index);
}

// Prev
function prevSlide() {
  index--;
  if (index < 0) index = slides.length - 1;
  showSlide(index);
}

// Auto slide
setInterval(nextSlide, 4000);

// Events
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

// Dots click
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    showSlide(index);
  });
});

const menuBtn = document.querySelector(".menu");
const sideMenu = document.getElementById("sideMenu");
const closeMenu = document.getElementById("closeMenu");
const menuLinks = document.querySelectorAll(".menu-link");

// Open menu
menuBtn.addEventListener("click", () => {
  sideMenu.classList.add("active");
});

// Close menu (X)
closeMenu.addEventListener("click", () => {
  sideMenu.classList.remove("active");
});

// Close menu after clicking link
menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    sideMenu.classList.remove("active");
  });
});


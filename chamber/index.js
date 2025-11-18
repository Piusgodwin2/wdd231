

  // Mobile menu toggle
const toggleBtn = document.getElementById('menu-toggle');
const navmenu = document.getElementById('nav-menu');

toggleBtn.addEventListener('click', () => {
    navmenu.classList.toggle('open');
});

  // HERO SLIDESHOW SCRIPT
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function changeSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  // Change slide every 5 seconds
  setInterval(changeSlide, 5000);
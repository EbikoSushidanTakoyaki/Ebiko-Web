// loading
const loading = document.getElementById("loader-wrapper");
const html = document.querySelector("html");
const animation = document.getElementById("loading-animation");

document.addEventListener("DOMContentLoaded", init);
function init() {
  onload = function () {
    animation.addEventListener("ended", function () {
      loading.classList.toggle("close");
      setTimeout(() => {
        html.classList.remove("loading");
      }, 100);

      setTimeout(() => {
        loading.remove();
      }, 500);
    });
  };
}

// mobile menu
const menuToggle = document.querySelector(".hamburger-menu input");
const navbar = document.querySelectorAll(".inner-nav ul");
const navlist = document.querySelectorAll(".inner-nav li");
const checkBox = document.querySelector(".checkbox");
menuToggle.addEventListener("click", function () {
  for (j = 0; j < navbar.length; j++) {
    navbar[j].classList.toggle("open");
  }
});

for (i = 0; i < navlist.length; i++) {
  navlist[i].addEventListener("click", function () {
    for (j = 0; j < navbar.length; j++) {
      navbar[j].classList.remove("open");
    }
    checkBox.checked = false;
  });
}

// carousel current use
const carousel = document.querySelectorAll(".swiper-slide");
const swiper = new Swiper(".swiper", {
  speed: 1000,
  centeredSlides: true,
  loop: true,
  breakpoints: {
    // when window width is >= 576px
    100: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    835: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const swiper2 = new Swiper(".swiper-2", {
  speed: 1000,
  centeredSlides: true,
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },

  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const menuToggle = document.querySelector(".hamburger-menu input");
const topleftNav = document.querySelector(".topleft-nav");
const toprightNav = document.querySelector(".topright-nav");
const checkBox = document.querySelector(".checkbox");
const topLeftNavUl = document.getElementById("nav1");
const topRightNavUl = document.getElementById("nav2");
const carousel = document.querySelectorAll(".swiper-slide");
var slidenum = 0;

// mobile menu
menuToggle.addEventListener("click", function () {
  topleftNav.classList.toggle("open");
  toprightNav.classList.toggle("open");
});

topLeftNavUl.addEventListener("click", function () {
  toprightNav.classList.remove("open");
  topleftNav.classList.remove("open");
  checkBox.checked = false;
});
topRightNavUl.addEventListener("click", function () {
  toprightNav.classList.remove("open");
  topleftNav.classList.remove("open");
  checkBox.checked = false;
});

// carousel algorithm
var playSlider;
var repeater = () => {
  playSlider = setInterval(function () {
    slidenum++;
    if (slidenum > carousel.length - 1) {
      slidenum = 0;
    }

    if (slidenum != 0) {
      carousel[slidenum - 1].classList.remove("swiper-slide-active");
    } else {
      carousel[carousel.length - 1].classList.remove("swiper-slide-active");
    }

    carousel[slidenum].classList.add("swiper-slide-active");
    console.log(slidenum);
    // console.log(carousel.length);
  }, 4000);
};
// repeater();

// carousel current use
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

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  // },

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

const menuToggle = document.querySelector(".hamburger-menu input");
const navbar = document.querySelectorAll(".inner-nav ul");
const navlist = document.querySelectorAll(".inner-nav li");
const checkBox = document.querySelector(".checkbox");
const carousel = document.querySelectorAll(".swiper-slide");
var slidenum = 0;
const loadingDuration = document.getElementById("loading").duration * 1000;

// loading
const loading = document.getElementById("loader-wrapper");
const html = document.querySelector("html");
// document.addEventListener("DOMContentLoaded", init);
// function init() {
//   setTimeout(() => {
//     loading.classList.toggle("close");
//   }, 3000);
//   setTimeout(() => {
//     html.classList.remove("loading");
//   }, 3200);

//   setTimeout(() => {
//     loading.remove();
//   }, 3500);
// }

onload = function () {
  setTimeout(() => {
    loading.classList.toggle("close");
  }, 3000);
  setTimeout(() => {
    html.classList.remove("loading");
  }, 3200);
  setTimeout(() => {
    loading.remove();
  }, 3500);
};

// mobile menu
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

const swiper2 = new Swiper(".swiper-2", {
  speed: 1000,
  centeredSlides: true,
  loop: true,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  // breakpoints: {
  //   // when window width is >= 576px
  //   100: {
  //     slidesPerView: 1,
  //     spaceBetween: 10,
  //   },
  //   835: {
  //     slidesPerView: 1,
  //     spaceBetween: 50,
  //   },
  // },

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

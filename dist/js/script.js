var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

// hamburger
const hamburger = document.querySelector("#hamburger");
const kotak = document.querySelector("#kotak");
const kotak2 = document.querySelector("#kotak2");
const x = document.querySelector("#x");
//navMenu
const navMenu = document.querySelector("#nav-menu");

//navbarfixed
window.onscroll = function () {
  const header = document.querySelector("nav");

  const fixednav = header.offsetTop;

  if (window.pageYOffset > fixednav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

window.onscroll = myScroll;
var counter = 0; // Global Variable
function myScroll() {
  if (counter == 0) {
    // if counter is 1, it will not execute
    if (window.pageYOffset > 3316) {
      // count animation
      function countTo() {
        let from = 340000;
        let to = 342178;
        let step = to > from ? 1 : -1;
        let interval = 1;

        if (from == to) {
          document.querySelector("#output").textContent = from;
          return;
        }

        let counter = setInterval(function () {
          from += step;
          document.querySelector("#output").textContent = from;

          if (from == to) {
            clearInterval(counter);
          }
        }, interval);
      }
      countTo();
      counter++; // increment the counter by 1, new value = 1
    }
  }
}

hamburger.addEventListener("click", function () {
  kotak.classList.toggle("hidden");
  x.classList.toggle("hidden");
  navMenu.classList.toggle("hidden");
});

// klik di luar hamburger
window.addEventListener("click", function (e) {
  if (e.target != navMenu && e.target != hamburger && e.target != kotak && e.target != kotak2) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
    x.classList.add("hidden");
    kotak.classList.remove("hidden");
  }
});

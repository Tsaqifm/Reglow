// hamburger
const hamburger = document.querySelector("#hamburger");
const kotak = document.querySelector("#kotak");
const kotak2 = document.querySelector("#kotak2");
const x = document.querySelector("#x");
//navMenu
const navMenu = document.querySelector("#nav-menu");

//navbarfixed
window.addEventListener("scroll", navbar);
function navbar() {
  const header = document.querySelector("nav");
  const fixednav = header.offsetTop;
  const toTop = document.getElementById("to-top");
  if (window.pageYOffset > fixednav) {
    header.classList.add("navbar-fixed");
    toTop.classList.replace("hidden", "flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.replace("flex", "hidden");
  }
}

// form button
const buttonKirim = document.querySelector("#button");
buttonKirim.addEventListener("click", function () {
  const nama = document.querySelector("#name");
  const nomor = document.querySelector("#number");
  buttonKirim.setAttribute("href", `https://api.whatsapp.com/send/?phone=6282283370668&text=Halo+nama+saya+${nama.value}+dan+nomer+hp+saya+${nomor.value}&type=phone_number&app_absent=0`);
});

// hidden hamburger
hamburger.addEventListener("click", function () {
  kotak.classList.toggle("hidden");
  x.classList.toggle("hidden");
  navMenu.classList.toggle("hidden");
});

// click on the outside hamburger
window.addEventListener("click", function (e) {
  if (e.target != navMenu && e.target != hamburger && e.target != kotak && e.target != kotak2) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
    x.classList.add("hidden");
    kotak.classList.remove("hidden");
  }
});

//get year from footer(COPYRIGHT)
(() => {
  const date = new Date();
  let year = date.getFullYear();
  document.querySelector("#year").innerHTML = year;
  return year;
})();

// counter animation
window.addEventListener("scroll", myScroll);
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

// from libarary swiper.js
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

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

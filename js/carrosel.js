var swiperPortfolio = new Swiper(".swiper-portfolio", {
  effect: "slide",
  spaceBetween: "24",
  slidesPerView: "auto",
  
  autoplay: {
    delay: 3000,
  },
  pagination: {
    clickable: "true",
    el: ".swiper-pagination",
  },
});

var swiperTime = new Swiper(".swiper-time", {
  slidesPerView: "auto",
  spaceBetween: "24",

  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper", {
  effect: "fade",
  loop: true,
  // autoplay: {
  //   delay: 5000,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

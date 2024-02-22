var swiperTime = new Swiper(".swiper-time", {
  slidesPerView: "auto",
  spaceBetween: "24",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper", {
  effect: "fade",
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".swiperbrand", {
  speed: 4000,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 20,
    disableOnInteraction: false,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

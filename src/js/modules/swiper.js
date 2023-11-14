module.exports = function () {

  // begin Popular slider
  const popularSlider = new Swiper("#popular-slider", {
    slidesPerView: 1.2,
    spaceBetween: 10,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    loop: true,
    navigation: {
      prevEl: ".swiper-btn--prev",
      nextEl: ".swiper-btn--next",
    },
    breakpoints: {
      560: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
  // end Popular slider

};
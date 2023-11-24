module.exports = function () {

  $(document).ready(function () {
    const header = $('.product-header');
    const title = $(header).find('.product-header__title');
    const price = $(header).find('.product-header__price');
    const btn = $(header).find('.btn');
    const link = $(header).find('.product-scroll-nav__link');

    let p360 = false;
    let faq = false;

    // CHANGE TO BLACK
    function changeToBlack() {
      const section = $('#p-360');
      const sectionTop = section.offset().top;
      const windowHeight = $(window).height();
      const scrollTop = $(window).scrollTop();

      p360 = scrollTop >= sectionTop - (windowHeight - windowHeight);
    }

    // CHANGE TO WHITE
    function changeToWhite() {
      const section = $('#gallery');
      const sectionTop = section.offset().top;
      const windowHeight = $(window).height();
      const scrollTop = $(window).scrollTop();

      // if (scrollTop >= sectionTop - (windowHeight * 0.1)) {
      faq = scrollTop >= sectionTop - (windowHeight - windowHeight);
    }

    function scrollNav() {
      changeToBlack();
      changeToWhite();
      if (p360 && faq) {
        $(title).removeClass('dark');
        $(price).removeClass('dark');
        $(link).removeClass('dark');
        $(btn).removeClass('btn--dark');
      } else if (p360) {
        $(title).addClass('dark');
        $(price).addClass('dark');
        $(link).addClass('dark');
        $(btn).addClass('btn--dark');
      } else {
        $(title).removeClass('dark');
        $(price).removeClass('dark');
        $(link).removeClass('dark');
        $(btn).removeClass('btn--dark');
      }
    }

    const section1 = $('#p-360');
    const section2 = $('#gallery');

    if (section1.length && section2.length) {
      // Добавляем прослушиватель события прокрутки страницы
      $(window).on('scroll', scrollNav);
      // Вызываем функцию один раз сразу, чтобы проверить начальное положение секции
      scrollNav();
    }

  });

};
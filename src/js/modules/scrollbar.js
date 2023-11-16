module.exports = function () {

  // https://github.com/malihu/malihu-custom-scrollbar-plugin
  $(window).on("load", function () {
    $('.seo__container').mCustomScrollbar();

    $('.basket__content').mCustomScrollbar({
      scrollbarPosition: 'outside',
      alwaysShowScrollbar: 0,
      // autoHideScrollbar: true,
    });

    //checkout page
    if (window.innerWidth >= 1200) {
      $('.checkout-total').mCustomScrollbar({
        alwaysShowScrollbar: 0,
        scrollbarPosition: 'outside',
        autoHideScrollbar: true,
      });
    }
  });

};
module.exports = function () {

  // https://github.com/malihu/malihu-custom-scrollbar-plugin
  $(window).on("load", function () {
    //index page
    $('.seo__container').mCustomScrollbar();

    //checkout page
    if (window.innerWidth >= 1200) {
      $('.checkout-total').mCustomScrollbar();
    }
  });

};
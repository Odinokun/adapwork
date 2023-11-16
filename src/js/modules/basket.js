module.exports = function () {

  $('.header-cart').on('click', function (e) {
    e.preventDefault();
    $('.basket-layer, .basket').fadeIn();
  });
  $('.header__cart-btn').on('click', function (e) {
    e.preventDefault();
    $('.basket-layer, .basket').fadeIn();
  });


  $('.basket-layer').on('click', function (e) {
    e.preventDefault();
    $('.basket-layer, .basket').fadeOut();
  });
  $('.basket__header-close').on('click', function (e) {
    e.preventDefault();
    $('.basket-layer, .basket').fadeOut();
  });

};
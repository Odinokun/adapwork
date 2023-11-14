module.exports = function () {

  $('.filter-panel__btn--filter').on('click', function () {
    $('#filter-popup').fadeIn();
  });

  $('.filter-panel__btn--sort').on('click', function () {
    $('#sort-popup').fadeIn();
  });

  $('.filter-popup__close').on('click', function () {
    $('.popup').fadeOut();
  });

};
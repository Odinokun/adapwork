module.exports = function () {
  $('.footer-top__select-country').on('click', function (e) {
    e.preventDefault();
    $('#country-popup-layer, #country-popup').fadeIn();
  });

  $('#country-popup-layer').on('click', function (e) {
    e.preventDefault();
    $('#country-popup-layer, #country-popup').fadeOut();
  });

  $('.country-popup__header-close').on('click', function (e) {
    e.preventDefault();
    $('#country-popup-layer, #country-popup').fadeOut();
  });
};

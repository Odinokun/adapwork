module.exports = function () {

  $('.header__menu-btn').on('click', function (e) {
    e.preventDefault();

    $(this).toggleClass('active');
    $('#mobile-menu, #header').toggleClass('active');
  });


};
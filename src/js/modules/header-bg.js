module.exports = function () {

  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#header').addClass('is-scroll');
      } else {
        $('#header').removeClass('is-scroll');
      }
    });
  });

};
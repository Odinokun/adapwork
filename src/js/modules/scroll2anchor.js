module.exports = function () {

  $(function() {
    $('.product-360-header__nav-link[href*=\\#]').on("click", function(e){
       e.preventDefault();
       let anchor = $(this);
       $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 0 + 'px'
       }, 1000);
    });
    return false;
  });

  $(function () {
    $('.catalog-body__footer-btn[href*=\\#]').on("click", function (e) {
      e.preventDefault();
      let anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 0 + 'px'
      }, 1000);
    });
    return false;
  });

};
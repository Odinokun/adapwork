module.exports = function () {

  $('.catalog-filter__item-row-btn').on('click', function (e) {
    e.preventDefault();
    let targetPopup = '#' + $(this).data('tooltip');

    $('.catalog-filter__item-row-btn').removeClass('active');
    $('.tooltip').fadeOut(0);

    $(this).addClass('active');
    $(targetPopup).fadeIn();
  });

  $('.tooltip__close').on('click', function () {
    $('.catalog-filter__item-row-btn').removeClass('active');
    $('.tooltip').fadeOut();
  });

};
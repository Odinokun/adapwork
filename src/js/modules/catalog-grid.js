module.exports = function () {

  $('.filter-panel__btn--position').on('click', function () {
    if ($(this).hasClass('active')) return;
    $('.filter-panel__btn--position').removeClass('active');
    $(this).addClass('active');
    $('.catalog-body__list').toggleClass('catalog-body__list--grid');
  });

};
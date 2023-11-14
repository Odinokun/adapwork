module.exports = function() {

  $('.catalog-filter__item-all-btn').on('click', function(e) {
    const wrap = $(this).closest('.catalog-filter__item-rows');
    const hiddenItems = $(wrap).find('.catalog-filter__item-row:gt(3)');

    $(hiddenItems).slideToggle();
    $(this).find('span').fadeToggle();
  });


};
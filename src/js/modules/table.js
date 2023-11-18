module.exports = function () {

  $('.product-specif__table-btn').on('click', function () {
    $('.product-specif__table-btn-wrap').fadeOut();
    $('.product-specif__table').find('.product-specif__table-row').slideDown();
  });

};
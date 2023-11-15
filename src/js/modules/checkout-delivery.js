module.exports = function () {

  $('.checkout-delivery__item').on('click', function () {
    const wrap = $(this).closest('.checkout-delivery__content');
    $(wrap).removeClass('start');
  });

};
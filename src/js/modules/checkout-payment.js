module.exports = function () {

  $('.checkout-payment__item').on('click', function () {
    const wrap = $(this).closest('.checkout-payment__content');
    $(wrap).removeClass('start');
  });

};
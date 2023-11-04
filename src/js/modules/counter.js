module.exports = function () {

  $('.counter__btn').on('click', function (e) {
    e.preventDefault();
    const field = $(this).parent().find('.counter__input');
    let val = parseInt(field.val()) || 0;

    if ($(this).hasClass('counter__btn--minus') && val > 1) {
      val--;
    } else if ($(this).hasClass('counter__btn--plus')) {
      val++;
    }
    field.val(val);
  })

};
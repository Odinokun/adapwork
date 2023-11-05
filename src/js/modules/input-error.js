module.exports = function () {

  $('input').on('keyup', function () {
    const wrap = $(this).closest('.input');

    if ($(this).val() === "" && $(this).attr('required')) {
      $(wrap).addClass('error');
    } else {
      $(wrap).removeClass('error');
    }
  })

};
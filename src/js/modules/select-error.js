module.exports = function () {

  $('select').on('change', function () {
    const wrap = $(this).closest('.select');
    if ($(this).val() === "placeholder" && $(this).attr('required')) {
      $(wrap).addClass('error');
    } else if ($(this).val() !== "placeholder") {
      $(wrap).addClass('selected');
      $(wrap).removeClass('error');
    } else {
      $(wrap).removeClass('selected');
      $(wrap).removeClass('error');
    }
  })

};
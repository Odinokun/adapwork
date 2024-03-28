module.exports = function () {
  $(document).on('scroll', function () {
    const wrapper = $('#white-wrapper');
    const header = $('.product-header');

    const wrapperTop = wrapper.offset().top;
    const windowHeight = $(window).height();
    const wrapperHeight = wrapper.height();
    const scrollTop = $(window).scrollTop();

    const dark = scrollTop >= wrapperTop - (windowHeight - windowHeight);
    const white = scrollTop >= wrapperTop + wrapperHeight;

    if (dark && !white) {
      $(header).addClass('dark');
    } else {
      $(header).removeClass('dark');
    }
  });
};

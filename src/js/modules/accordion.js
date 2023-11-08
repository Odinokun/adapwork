module.exports = function () {

  $('.support__faq-item-header').on('click', function () {
    const faq = $(this).closest('.support__faq-item');
    $(faq).toggleClass('active');
    $(faq).find('.support__faq-item-content').slideToggle();
  });

};
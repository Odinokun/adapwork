module.exports = function () {

  const images = [
    'assets/img/360/senior-01.jpg',
    'assets/img/360/senior-02.jpg',
    'assets/img/360/senior-03.jpg',
    'assets/img/360/senior-04.jpg',
    'assets/img/360/senior-05.jpg',
    'assets/img/360/senior-06.jpg',
    'assets/img/360/senior-07.jpg',
    'assets/img/360/senior-08.jpg',
    'assets/img/360/senior-09.jpg',
    'assets/img/360/senior-10.jpg',
    'assets/img/360/senior-11.jpg',
    'assets/img/360/senior-12.jpg',
    'assets/img/360/senior-13.jpg',
    'assets/img/360/senior-14.jpg',
    'assets/img/360/senior-15.jpg',
  ]

// begin preloading images
  let imageCount = 0;
  for (let i = 0; i < images.length; i++) {
    let img = new Image();
    img.onload = function () {
      imageCount++;
    }
    img.src = images[i];
  }
// end preloading images

  const img = document.querySelector('.product-360__middle-image');
  const range = document.querySelector('.product-360__middle-range');
  const rangeIndicator = document.querySelector('.product-360__middle-range-slider');
  const middleImage = Math.floor(images.length / 2);

  if (img && range && rangeIndicator) {
    range.value = middleImage;
    rangeIndicator.value = middleImage;

    range.max = images.length - 1;
    rangeIndicator.max = images.length - 1;

    img.src = images[middleImage];
    range.oninput = () => img.src = images[range.value];
  }

//  added opacity for range
  $(range).on("mousedown", function () {
    $(this).addClass('active');
  });
  $(range).on("mouseup", function () {
    $(this).removeClass('active');
  });

  $(document).ready(function () {
    $('.product-360__middle-range').on('input', function () {
      $('.product-360__middle-range-slider').val($(this).val());
    });

    $('.product-360__middle-range-slider').on('input', function () {
      $('.product-360__middle-range').val($(this).val());
    });
  });


};
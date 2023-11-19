// BEGIN Temp navigation menu for development
// should be commented before production

$(document).ready(function ($) {
  pageWidget([
    'index',
    'checkout',
    'thank',
    'about',
    'support',
    'showroom',
    'catalog',
    'product',
  ]);
});

function pageWidget(pages) {
  let widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
  widgetWrap.prependTo("body");
  for (let i = 0; i < pages.length; i++) {
    $('<li class="widget_item"><a class="widget_link" href="'
      + pages[i]
      + '.html'
      + '">'
      + pages[i]
      + '</a></li>').appendTo('.widget_list');
  }
  let widgetStilization = $('<style>body {position:relative} .widget_wrap{position:fixed;top:0;left:0;z-index:19999;padding:10px 20px;background:#d9910d;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#d9910d url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
  widgetStilization.prependTo(".widget_wrap");
}

// END Temp navigation menu for development
// should be commented before production


//====== Begin Programmer code ======
const images = [
  'http://adapwork.odinokun.com/assets/img/360/senior-01.jpg',
  'http://adapwork.odinokun.com/assets/img/360/senior-02.jpg',
  'http://adapwork.odinokun.com/assets/img/360/senior-03.jpg',
  'http://adapwork.odinokun.com/assets/img/360/senior-04.jpg',
  'http://adapwork.odinokun.com/assets/img/360/senior-05.jpg',
  'http://adapwork.odinokun.com/assets/img/360/senior-06.jpg',
  'http://adapwork.odinokun.com/assets/img/360/senior-07.jpg',
  'http://adapwork.odinokun.com/assets/img/360/senior-08.jpg',
  'http://adapwork.odinokun.com/assets/img/360/senior-09.jpg',
  'http://adapwork.odinokun.com/assets/img/360/senior-10.jpg',
  'http://adapwork.odinokun.com/assets/img/360/senior-11.jpg',
  'http://adapwork.odinokun.com/assets/img/360/senior-12.jpg',
  'http://adapwork.odinokun.com/assets/img/360/senior-13.jpg',
  'http://adapwork.odinokun.com/assets/img/360/senior-14.jpg',
  'http://adapwork.odinokun.com/assets/img/360/senior-15.jpg',
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

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
    'privacy',
    'error',
  ]);
});

function pageWidget(pages) {
  let widgetWrap = $(
    '<div class="widget_wrap"><ul class="widget_list"></ul></div>'
  );
  widgetWrap.prependTo('body');
  for (let i = 0; i < pages.length; i++) {
    $(
      '<li class="widget_item"><a class="widget_link" href="' +
        pages[i] +
        '.html' +
        '">' +
        pages[i] +
        '</a></li>'
    ).appendTo('.widget_list');
  }
  let widgetStilization = $(
    '<style>body {position:relative} .widget_wrap{position:fixed;top:0;left:0;z-index:19999;padding:10px 20px;background:#d9910d;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#d9910d url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>'
  );
  widgetStilization.prependTo('.widget_wrap');
}

// END Temp navigation menu for development
// should be commented before production

//====== Begin Programmer code ======

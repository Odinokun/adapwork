module.exports = function () {
  let stage;

  function init() {
    let canvas = document.getElementById("360viewer");
    if (!canvas || !canvas.getContext) return;

    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(true);
    stage.mouseMoveOutside = true;
    createjs.Touch.enable(stage);

    const canvasWrapper = document.getElementById('product-360__canvas');
    const imgList = canvasWrapper.getAttribute('data-images').split(',');

    // let imgList = [
    //     'assets/img/360/senior-01.jpg',
    //     'assets/img/360/senior-02.jpg',
    //     'assets/img/360/senior-03.jpg',
    //     'assets/img/360/senior-04.jpg',
    //     'assets/img/360/senior-05.jpg',
    //     'assets/img/360/senior-06.jpg',
    //     'assets/img/360/senior-07.jpg',
    //     'assets/img/360/senior-08.jpg',
    //     'assets/img/360/senior-09.jpg',
    //     'assets/img/360/senior-10.jpg',
    //     'assets/img/360/senior-11.jpg',
    //     'assets/img/360/senior-12.jpg',
    //     'assets/img/360/senior-13.jpg',
    //     'assets/img/360/senior-14.jpg',
    //     'assets/img/360/senior-15.jpg',
    // ];
    let images = [],
      loaded = 0,
      currentFrame = 0,
      totalFrames = imgList.length;
    let rotate360Interval, start_x;

    let bg = new createjs.Shape();
    stage.addChild(bg);

    let bmp = new createjs.Bitmap();
    stage.addChild(bmp);

    function load360Image() {
      let img = new Image();
      img.src = imgList[loaded];
      img.onload = img360Loaded;
      images[loaded] = img;
    }

    function img360Loaded(event) {
      loaded++;
      bg.graphics.clear()
      bg.graphics.beginFill("#fff").drawRect(0, 0, stage.canvas.width * loaded / totalFrames, stage.canvas.height);
      bg.graphics.endFill();

      if (loaded === totalFrames) start360();
      else load360Image();
    }

    function start360() {
      document.body.style.cursor = 'none';
      update360(0);

      // first rotation
      rotate360Interval = setInterval(function() {
        if (currentFrame === totalFrames - 1) {
          clearInterval(rotate360Interval);
          addNavigation();
        }
        update360(1);
      }, 25);
    }

    function iconLoaded(event) {
      let iconBmp = new createjs.Bitmap();
      iconBmp.image = event.target;
      iconBmp.x = 20;
      iconBmp.y = canvas.height - iconBmp.image.height - 20;
      stage.addChild(iconBmp);
    }

    function update360(dir) {
      currentFrame += dir;
      if (currentFrame < 0) currentFrame = totalFrames - 1;
      else if (currentFrame > totalFrames - 1) currentFrame = 0;
      bmp.image = images[currentFrame];
    }

    //-------------------------------
    function addNavigation() {
      stage.onMouseOver = mouseOver;
      stage.onMouseDown = mousePressed;
      document.body.style.cursor = 'default';
    }

    function mouseOver() {
      // document.body.style.cursor = 'default';
    }

    function mousePressed(event) {
      start_x = event.rawX;
      stage.onMouseMove = mouseMoved;
      stage.onMouseUp = mouseUp;

      // document.body.style.cursor = 'grabbing';
    }

    function mouseMoved(event) {
      let dx = event.rawX - start_x;
      let abs_dx = Math.abs(dx);

      // here we should have a sensibility threshold
      if (abs_dx > 20) {
        update360(dx / abs_dx);
        start_x = event.rawX;
      }
    }

    function mouseUp(event) {
      stage.onMouseMove = null;
      stage.onMouseUp = null;
      // document.body.style.cursor = 'default';
    }

    function handleTick() {
      stage.update();
    }

    // document.body.style.cursor = 'grabbing';
    load360Image();

    // TICKER
    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.setFPS(24);
    createjs.Ticker.useRAF = true;
  }

// Init
  window.addEventListener('load', init, false);


};
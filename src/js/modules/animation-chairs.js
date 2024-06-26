module.exports = function () {
  const sequence_container = document.getElementById('chairs-wrapper');
  const canvas = document.getElementById('canvas-scroll-chairs');
  const text01 = document.getElementById('chairs-text-01');
  const text02 = document.getElementById('chairs-text-02');
  const text03 = document.getElementById('chairs-text-03');
  const text04 = document.getElementById('chairs-text-04');
  const text05 = document.getElementById('chairs-text-05');

  const chairs_progress = document.getElementById('chairs-progress');
  const chairs_progress_scale = document.getElementById(
    'chairs-progress__scale'
  );

  if (!sequence_container || !canvas) return;

  const context = canvas.getContext('2d');
  const windowWidth = window.innerWidth;

  //TO SET THE NUMBER OF IMAGES
  const frameCount = 344;
  let imagePath = '';
  if (windowWidth >= 1024) {
    imagePath = 'assets/img/chairs/desktop/chair-';
  } else {
    imagePath = 'assets/img/chairs/mobile/chair-';
  }

  const currentFrame = index => `${imagePath}${index.toString() - 1}.jpg`;

  const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  };

  const img = new Image();
  img.src = currentFrame(1);

  if (windowWidth >= 1024) {
    canvas.width = 1920;
    canvas.height = 2160;
  } else {
    canvas.width = 960;
    canvas.height = 1080;
  }

  img.onload = function () {
    context.drawImage(img, 0, 0);
  };

  const updateImage = index => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
  };

  const removeText = () => {
    text01.classList.remove('active');
    text02.classList.remove('active');
    text03.classList.remove('active');
    text04.classList.remove('active');
    text05.classList.remove('active');
  };

  window.addEventListener('scroll', () => {
    const viewportHeight = window.innerHeight;

    //start animation
    // const minScrollTop = sequence_container.getBoundingClientRect().top - viewportHeight / 2;
    const minScrollTop = sequence_container.getBoundingClientRect().top;
    //end animation
    // const maxScrollTop = sequence_container.clientHeight;
    const maxScrollTop = sequence_container.clientHeight - viewportHeight;
    let scrollFraction = (-1 * minScrollTop) / maxScrollTop;

    if (scrollFraction < 0) {
      scrollFraction = 0;
    }

    const frameIndex = Math.min(
      frameCount - 1,
      Math.ceil(scrollFraction * frameCount)
    );

    const onePercent = frameCount / 100;
    chairs_progress_scale.style.height = `${frameIndex / onePercent}%`;

    //TO SET THE FIXED SCROLL TRIGGER POINT (images - 1)
    if (
      frameIndex > onePercent * 8 &&
      frameIndex < frameCount - onePercent * 12
    ) {
      chairs_progress.classList.add('fixed');
    } else {
      chairs_progress.classList.remove('fixed');
    }

    //TO SET THE TEXT TRIGGER POINTS
    if (frameIndex > 0 && frameIndex <= 60) {
      removeText();
      text01.classList.add('active');
    } else if (frameIndex > 60 && frameIndex <= 161) {
      removeText();
      text02.classList.add('active');
    } else if (frameIndex > 161 && frameIndex <= 222) {
      removeText();
      text03.classList.add('active');
    } else if (frameIndex > 222 && frameIndex <= 283) {
      removeText();
      text04.classList.add('active');
    } else if (frameIndex > 283) {
      removeText();
      text05.classList.add('active');
    }

    requestAnimationFrame(() => updateImage(frameIndex + 1));
  });

  preloadImages();
};

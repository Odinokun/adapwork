module.exports = function () {

  const sequence_container = document.getElementById("sequence-container-01");
  const canvas = document.getElementById("canvas-scroll-01");
  const text = document.getElementById('products__right-canvas-text-01');

  if (!sequence_container || !canvas || !text) return;

  const context = canvas.getContext("2d");

  const frameCount = 151;
  const currentFrame = index => (
    // `assets/img/chair/S02_00${index.toString().padStart(2, '0')}.png`
    `assets/img/chair/${index.toString() - 1}.png`
  )

  const preloadImages = () => {
    for (let i = 1; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
    }
  };

  const img = new Image()
  img.src = currentFrame(1);
  canvas.width = 400;
  canvas.height = 500;
  img.onload = function () {
    context.drawImage(img, 0, 0);
  }

  const updateImage = index => {
    img.src = currentFrame(index);
    context.drawImage(img, 0, 0);
  }

  window.addEventListener('scroll', () => {

    const viewportHeight = window.innerHeight;

    const minScrollTop = sequence_container.getBoundingClientRect().top - viewportHeight / 2;
    const maxScrollTop = sequence_container.clientHeight;
    let scrollFraction = -1 * minScrollTop / maxScrollTop;

    if (scrollFraction < 0) {
      scrollFraction = 0;
    }


    const frameIndex = Math.min(
      frameCount - 1,
      Math.ceil(scrollFraction * frameCount)
    );

    if (frameIndex > 50) {
      text.classList.add('active');
    } else {
      text.classList.remove('active');
    }

    requestAnimationFrame(() => updateImage(frameIndex + 1));
  });

  preloadImages()


};
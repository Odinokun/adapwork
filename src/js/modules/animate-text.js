const SplitType = require('split-type');
module.exports = function () {

  if (!gsap || !SplitType) {
    return console.error('Gsap or SplitType were not loaded');
  }

  if ($('#about-section').length === 0) {
    return;
  }

  // const matchesMobile = window?.matchMedia('(max-width: 1243px)')?.matches;
  const matchesMobile = true;

  new SplitType('.split-text', {
    types: 'words, chars',
    tagName: 'span',
  });

  const textRevealTimeline = gsap.timeline();
  const imagesTimeline = gsap.timeline();

  // BEGIN TEXT REVEAL ANIMATION
  textRevealTimeline.from('#about-section .char', {
    scrollTrigger: {
      trigger: '#about-section',
      start: matchesMobile ? 'top 0' : 'top 10%',
      end: '+=2000',
      scrub: 2,
      pin: true,
    },
    // opacity: 0.05,
    color: '#1b1b1b',
    // scale: 1.35,
    // ease: 'back.out(2)',
    stagger: { amount: 10, from: 'start' },
  });
  // END TEXT REVEAL ANIMATION

  // BEGIN IMAGES ANIMATION
  imagesTimeline.to('.about-section__images--down', {
    scrollTrigger: {
      trigger: '#about-section',
      start: 'top 20%',
      scrub: 2,
      end: '+=2200',
    },
    y: '-100%',
    ease: 'none', // !IMPORTANT
  });

  imagesTimeline.to('.about-section__images--up', {
    scrollTrigger: {
      trigger: '#about-section',
      start: 'top 20%',
      scrub: 1.2,
      end: '+=2200',
    },
    y: '-100%',
    ease: 'none', // !IMPORTANT
  });
  // END IMAGES ANIMATION

  gsap.to('.bifma', {
    opacity: 1,
    duration: 1.2,
    scrollTrigger: {
      trigger: '.bifma',
      start: '100% bottom',
      scrub: 1.2,
      once: true,
    },
  });


};
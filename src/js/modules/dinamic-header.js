module.exports = function () {

  const header = document.getElementById("header");
  let counter = 0;

  function trackScroll() {
    let currentScrollPos = document.documentElement.scrollTop;
    let currCounter = currentScrollPos - counter;

    if (currCounter > 200) {
      counter = currentScrollPos
      header.classList.add("hidden")
    } else if (currCounter < -200 || currentScrollPos === 0) {
      counter = currentScrollPos
      header.classList.remove("hidden");
    }
  }

  window.onscroll = function () {
    trackScroll();
  }

};

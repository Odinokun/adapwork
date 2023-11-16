module.exports = function () {

  const header = document.getElementById("header");
  let counter = 0;

  function trackScroll() {
    let currentScrollPos = document.documentElement.scrollTop;
    let currCounter = currentScrollPos - counter;

    if (currCounter > 200) {
      console.log('to bottom ', counter)
      counter = currentScrollPos
      header.classList.add("hidden")
    } else if (currCounter < -200 || currentScrollPos === 0) {
      console.log('to top ', counter)
      counter = currentScrollPos
      header.classList.remove("hidden");
    }
  }

  window.onscroll = function () {
    trackScroll();
  }

};

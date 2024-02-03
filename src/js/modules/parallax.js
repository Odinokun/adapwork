module.exports = function () {
  (function () {
    // Add event listener
    document.addEventListener('mousemove', parallax);
    const elem = document.querySelector('#parallax');
    // Magic happens here
    function parallax(e) {
      let _w = window.innerWidth / 2;
      let _h = window.innerHeight / 2;
      let _mouseX = e.clientX;
      let _mouseY = e.clientY;
      let _depth1 = `${50 + (_mouseX - _w) * 0.001}% ${
        50 + (_mouseY - _h) * 0.01
      }%`;
      let _depth2 = `${50 + (_mouseX - _w) * 0.002}% ${
        50 + (_mouseY - _h) * 0.02
      }%`;
      let _depth3 = `${50 + (_mouseX - _w) * 0.003}% ${
        50 + (_mouseY - _h) * 0.03
      }%`;
      let _depth4 = `${50 + (_mouseX - _w) * 0.004}% ${
        50 + (_mouseY - _h) * 0.04
      }%`;
      let _depth5 = `${50 + (_mouseX - _w) * 0.005}% ${
        50 + (_mouseY - _h) * 0.05
      }%`;
      let _depth6 = `${50 + (_mouseX - _w) * 0.006}% ${
        50 + (_mouseY - _h) * 0.06
      }%`;
      let _depth7 = `${50 + (_mouseX - _w) * 0.007}% ${
        50 + (_mouseY - _h) * 0.07
      }%`;
      let _depth8 = `${50 + (_mouseX - _w) * 0.008}% ${
        50 + (_mouseY - _h) * 0.08
      }%`;
      let x = ` ${_depth8}, ${_depth7}, ${_depth6}, ${_depth5}, ${_depth4}, ${_depth3}, ${_depth2}, ${_depth1}`;
      console.log(x);
      elem.style.backgroundPosition = x;
    }
  })();
};

var tl = new TimelineMax({ onComplete: endFrame, repeat: 0, repeatDelay: 3 });
window.onload = function () {
  initAd();
};

function endFrame() {
  console.log("endFrame()");

}


function initAd() {


  // Helper function
  let domReady = (cb) => {
    document.readyState === 'interactive' || document.readyState === 'complete'
      ? cb()
      : document.addEventListener('DOMContentLoaded', cb);
  };

  domReady(() => {
    // Display body when DOM is loaded
    document.body.style.visibility = 'visible';
  });

  //---------- START ANIMATION ------------
  tl.addLabel("start")
    .set("#bg1,#car", { opacity: 0 })


  // ----------Frame 1 ------------
  tl.addLabel("frame1", "")
    .to('#whiteShadow', 6, { y:162, ease: Power1.easeInOut }, "frame1")
    .to('#textMain', 8, { x:-186,y:-508, ease: Power1.easeInOut }, "frame1")
    .to('#copy2', 1, { opacity:1,ease: Power1.easeIn }, "frame1+=1.6")
    .to('#copy3', 1, { opacity:1,ease: Power1.easeIn }, "frame1+=1.9")
    .to('#copy4', 1, { opacity:1,ease: Power1.easeIn }, "frame1+=2.2")
    .to('#copy5', 1, { opacity:1,ease: Power1.easeIn }, "frame1+=2.5")
    .to('#copy6', 1, { opacity:1,ease: Power1.easeIn }, "frame1+=2.8")
    .to('#copy7', 1, { opacity:1,ease: Power1.easeIn }, "frame1+=3.1")
    .to('#orangeStripContainer', 5, {x:38, y:-629, ease: Power1.easeInOut}, "frame1+=2")
    .to('#copy8', 1, { opacity:1, ease: Power1.easeIn }, "frame1+=5")
    .to('#textMain2', 2, { x:-85,y:-235, ease: Power1.easeOut }, "frame1+=5")
    .to('#copy9', 1, { opacity:1, ease: Power1.easeInOut }, "frame1+=6")
    .to('#textMain3', 2, { x:-66,y:-177, ease: Power1.easeInOut }, "frame1+=6")
    .to('#logoDisc', 1, {y:-8, opacity:1, ease: Power1.easeInOut }, "frame1+=8")
    .to('#ctaBox', 1, { scale:1,opacity:1, ease: Power1.easeInOut }, "frame1+=9")

}

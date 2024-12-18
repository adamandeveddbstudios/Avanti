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
    .to('#whiteShadow', 8, { x:354, ease: Power1.easeInOut }, "frame1")
    .to('#greenBorder_box1', 8, { x:-500,y:0, ease: Power1.easeInOut }, "frame1")
    .to('#orangeStripContainer', 8, {x:-500, ease: Power1.easeInOut}, "frame1")
    .to('#greenBorder_box2', 8, { x:-808,y:0, ease: Power1.easeInOut }, "frame1")
    .to('#textMain', 8, { x:-432,y:0, ease: Power1.easeInOut }, "frame1")
    .to('#copy2', 1, { opacity:1,ease: Power1.easeIn }, "frame1+=2.6")
    .to('#copy3', 1, { opacity:1,ease: Power1.easeIn }, "frame1+=3.2")
    .to('#copy4', 1, { opacity:1,ease: Power1.easeIn }, "frame1+=3.8")
    // .to('#copy5', 1, { opacity:1,ease: Power1.easeIn }, "frame1+=3.1")
    // .to('#copy6', 1, { opacity:1,ease: Power1.easeIn }, "frame1+=4")
    .to('#copy7', 1, { opacity:1,ease: Power1.easeIn }, "frame1+=4.5")
    // .to('#whiteShadow', 3, { x:-15, ease: Power1.easeInOut }, "frame1+=6")
    // .to('#greenBorder_box2', 3, { x:-996, ease: Power1.easeInOut }, "frame1+=6")
    // .to('#textMain', 3, { x:-855, ease: Power1.easeInOut }, "frame1+=6")
    .to('#copy8', 2, { opacity:1, ease: Power1.easeOut }, "frame1+=5.1")
    .to('#textMain2', 3, {x:-340, ease: Power1.easeOut }, "frame1+=4.72")
    .to('#copy9', 2, { opacity:1, ease: Power1.easeOut }, "frame1+=6")
    .to('#textMain3', 2, { x:-140, ease: Power1.easeOut }, "frame1+=6")
    .to('#greenBorder_box2', 2, { x:-1088,y:0, ease: Power1.easeInOut }, "frame1+=8")
    .to('#whiteShadow', 2, { x:74, ease: Power1.easeInOut }, "frame1+=8")
    .to('#textMain', 2, { x:-710,y:0, ease: Power1.easeInOut }, "frame1+=8")
    .to('#textMain2', 2, { x:-619,y:0, ease: Power1.easeInOut }, "frame1+=8")
    .to('#textMain3', 2, { x:-419,y:0, ease: Power1.easeInOut }, "frame1+=8")
    .to('#logoDisc', 1, {y:-20, opacity:1, ease: Power1.easeInOut }, "frame1+=9")
    .to('#ctaBox', 1, { scale:0.9,opacity:1, ease: Power1.easeInOut }, "frame1+=9.5")

}
